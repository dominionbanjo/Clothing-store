import * as dotenv from "dotenv";
dotenv.config();

import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Order, { OrderStatus } from "../models/orderModel.js";
import Product from "../models/productModel.js";
import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} from "../errors/customError.js";
import axios from "axios";

interface CustomRequest extends Request {
  user?: {
    name: string;
    userId: string;
    role: string;
  };
}

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY!;
const PAYSTACK_BASE_URL = "https://api.paystack.co";

const initializePaystackPayment = async (email: string, amount: number) => {
  const nairaAmount = Math.round(amount * 100);

  console.log("Initializing Paystack payment for:", email, nairaAmount, "kobo");

  const response = await axios.post(
    `${PAYSTACK_BASE_URL}/transaction/initialize`,
    {
      email,
      amount: nairaAmount,
      currency: "NGN",
      callback_url: `${process.env.BASE_URL}/verify`,
    },
    {
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.data;
};

export const createOrder = async (req: CustomRequest, res: Response) => {
  const { items: cartItems, tax, shippingFee, email } = req.body;

  if (!req.user?.userId) throw new UnauthenticatedError("User not authorized");
  if (!cartItems || cartItems.length < 1)
    throw new BadRequestError("No cart items provided");
  if (!tax || !shippingFee)
    throw new BadRequestError("Please provide tax and shipping fee");

  let orderItems: any[] = [];
  let subtotal = 0;

  for (const item of cartItems) {
    const dbProduct = await Product.findById(item.product);
    if (!dbProduct)
      throw new NotFoundError(`No product with id: ${item.product}`);

    const singleOrderItem = {
      productId: dbProduct._id,
      description: dbProduct.description,
      size: item.size || "One size",
      image: dbProduct.image,
      price: dbProduct.price,
      amount: item.amount,
    };

    orderItems.push(singleOrderItem);
    subtotal += item.amount * dbProduct.price;
  }

  const total = subtotal + tax + shippingFee;

  const paymentInit = await initializePaystackPayment(email, total);

  const order = await Order.create({
    orderItems,
    total,
    subTotal: subtotal,
    tax,
    shippingFee,
    user: req.user.userId,
    clientSecret: paymentInit.access_code,
    reference: paymentInit.reference,
    paymentUrl: paymentInit.authorization_url,
  });

  res.status(StatusCodes.CREATED).json({
    msg: "Order created successfully",
    order,
    paymentUrl: paymentInit.authorization_url,
  });
};

export const getAllOrders = async (req: CustomRequest, res: Response) => {
  const orders = await Order.find({}).populate("user", "name email");
  res.status(StatusCodes.OK).json({ count: orders.length, orders });
};

export const getSingleOrder = async (req: CustomRequest, res: Response) => {
  const { id: orderId } = req.params;
  const order = await Order.findById(orderId);
  if (!order) throw new NotFoundError(`No order with id: ${orderId}`);

  if (
    req.user!.role !== "admin" &&
    order.user.toString() !== req.user!.userId
  ) {
    throw new UnauthenticatedError("Not authorized to view this order");
  }

  res.status(StatusCodes.OK).json({ order });
};

export const getCurrentUserOrders = async (
  req: CustomRequest,
  res: Response
) => {
  if (!req.user) throw new UnauthenticatedError("User not authorized");
  const orders = await Order.find({ user: req.user.userId });
  res.status(StatusCodes.OK).json({ count: orders.length, orders });
};

export const verifyPaystackPayment = async (
  req: CustomRequest,
  res: Response
) => {
  const { reference } = req.query;
  if (!reference) throw new BadRequestError("Missing payment reference");

  try {
    const response = await axios.get(
      `${PAYSTACK_BASE_URL}/transaction/verify/${reference}`,
      {
        headers: { Authorization: `Bearer ${PAYSTACK_SECRET_KEY}` },
      }
    );

    const paymentData = response.data.data;
    if (paymentData.status === "success") {
      const order = await Order.findOne({ reference });
      if (order) {
        order.status = OrderStatus.Paid;
        await order.save();
      }
      res.status(StatusCodes.OK).json({
        msg: "Payment verified successfully",
        paymentData,
      });
    } else {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "Payment verification failed" });
    }
  } catch (err: any) {
    console.error(err.response?.data || err.message);
    throw new BadRequestError("Failed to verify payment");
  }
};

export const updateOrder = async (req: CustomRequest, res: Response) => {
  const { id: orderId } = req.params;
  const { paymentIntentId } = req.body;

  if (!req.user?.userId) throw new UnauthenticatedError("User not authorized");

  const order = await Order.findById(orderId);
  if (!order) throw new NotFoundError(`No order with id: ${orderId}`);

  if (req.user.role !== "admin" && order.user.toString() !== req.user.userId) {
    throw new UnauthenticatedError("Not authorized to update this order");
  }

  order.paymentIntentId = paymentIntentId;
  order.status = OrderStatus.Paid;
  await order.save();

  res.status(StatusCodes.OK).json({ order });
};
