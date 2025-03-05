import { Request, Response } from "express";
import Cart, { ICart } from "../models/cartModel.js";
import { mergeCartItems } from "../utils/mergeCart.js";
import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} from "../errors/customError.js";
import { StatusCodes } from "http-status-codes";

interface CustomRequest extends Request {
  user?: {
    name: string;
    userId: string;
    role: string;
  };
}

export const getAllCartItems = async (
  req: CustomRequest,
  res: Response
): Promise<void> => {
  if (req.user?.userId) {
    const cart = await Cart.find({});
    if (!cart) throw new NotFoundError("No cart found");

    res.status(StatusCodes.OK).json({ cart });
  } else {
    throw new UnauthenticatedError("User not authorized");
  }
};

export const getCartItems = async (
  req: CustomRequest,
  res: Response
): Promise<void> => {
  if (req.user?.userId) {
    const UserId = req.user.userId;
    const cart = await Cart.findOne({ user: UserId });
    if (!cart) throw new NotFoundError("No cart found for this user");

    res.status(StatusCodes.OK).json({ cartItems: cart.cartItems });
  } else {
    throw new UnauthenticatedError("User not authorized");
  }
};

export const createCart = async (
  req: CustomRequest,
  res: Response
): Promise<void> => {
  const cartItems = req.body as ICart;
  // console.log(req.body);

  if (req.user?.userId) {
    const UserId = req.user.userId;

    if (!UserId || !cartItems || !Array.isArray(cartItems)) {
      throw new BadRequestError(
        "Invalid request! User ID and cart items are required."
      );
    }
    let cart = await Cart.findOne({ user: UserId });
    if (!cart) {
      cart = new Cart({ user: UserId, cartItems });
    } else {
      cart.cartItems = cartItems;
    }

    await cart.save();
    res
      .status(StatusCodes.CREATED)
      .json({ msg: "Cart creates successfully", cart });
  } else {
    throw new UnauthenticatedError("User not authorized");
  }
};

export const updateCart = async (
  req: CustomRequest,
  res: Response
): Promise<void> => {
  const cartItems = req.body as ICart;
  if (req.user?.userId) {
    const UserId = req.user.userId;
    if (!UserId || !cartItems || !Array.isArray(cartItems)) {
      throw new BadRequestError(
        "Invalid request! User ID and cart items are required."
      );
    }

    let cart = await Cart.findOne({ user: UserId });

    if (!cart) {
      cart = new Cart({ user: UserId, cartItems });
      await cart.save();
      res
        .status(StatusCodes.CREATED)
        .json({ msg: "Cart created successfully", cart });
    } else {
      cart.cartItems = mergeCartItems(cart.cartItems, cartItems);
      await cart.save();
      res
        .status(StatusCodes.OK)
        .json({ msg: "Cart updated successfully", cart });
    }
  } else {
    throw new UnauthenticatedError("User not authorized");
  }
};

export const deleteCart = async (
  req: CustomRequest,
  res: Response
): Promise<void> => {
  if (req.user?.userId) {
    const cart = await Cart.findOne({ user: req.user.userId });
    if (!cart) {
      throw new NotFoundError(`No cart found for this user ${req.user.userId}`);
    }
    await cart.deleteOne();
    res.status(StatusCodes.OK).json({ msg: "Cart deleted Successfully" });
  } else {
    throw new UnauthenticatedError("User not authorized");
  }
};
