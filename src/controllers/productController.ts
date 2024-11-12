import { Request, Response } from "express";
import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} from "../errors/customError.js";
import Product from "../models/productModel.js";
import { StatusCodes } from "http-status-codes";

interface CustomRequest extends Request {
  user?: {
    name: string;
    userId: string;
    role: string;
  };
}

export const createProduct = async (
  req: CustomRequest,
  res: Response
): Promise<void> => {
  if (req.body) {
    if (req.user?.userId) {
      req.body.user = req.user.userId;
      const product = await Product.create(req.body);
      res
        .status(StatusCodes.CREATED)
        .json({ msg: "Product Created Successfully", product });
    } else {
      throw new UnauthenticatedError("User not authorized");
    }
  } else {
    throw new BadRequestError("Please provide all fields");
  }
};

export const getAllProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { featured } = req.query;

  const products =
    featured === "true"
      ? await Product.find({ featured: true })
      : await Product.find({});

  res.status(StatusCodes.OK).json({ products, count: products.length });
};

export const getSingleProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id: productId } = req.params;
  if (productId) {
    const product = await Product.findOne({ _id: productId }).populate(
      "reviews"
    );
    if (!product) {
      throw new NotFoundError(`No product found with id ${productId}`);
    }
    res.status(StatusCodes.OK).json({ product });
  } else {
    throw new BadRequestError("Invalid request");
  }
};

export const updateProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id: productId } = req.params;
  if (productId && req.body) {
    const product = await Product.findOneAndUpdate(
      { _id: productId },
      req.body,
      { new: true, runValidators: true }
    );
    if (!product) {
      throw new NotFoundError(`No product found with id ${productId}`);
    }
    res
      .status(StatusCodes.OK)
      .json({ msg: "Product updated successfully", product });
  } else {
    throw new BadRequestError("Invalid request");
  }
};
export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id: productId } = req.params;
  if (productId) {
    const product = await Product.findOne({ _id: productId });
    if (!product) {
      throw new NotFoundError(`No product found with id ${productId}`);
    }
    await product.deleteOne();
    res.status(StatusCodes.OK).json({ msg: "Product removed successfully" });
  } else {
    throw new BadRequestError("Invalid request");
  }
};
