import { BadRequestError, NotFoundError } from "../errors/customError.js";
import { Request, Response } from "express";
import Product from "../models/productModel.js";
import Review from "../models/reviewModel.js";
import { StatusCodes } from "http-status-codes";
import checkPermissions from "../utils/checkPermissions.js";

interface CustomRequest extends Request {
  user?: {
    name: string;
    userId: string;
    role: string;
  };
}

export const createReview = async (
  req: CustomRequest,
  res: Response
): Promise<void> => {
  if (req.body && req.user) {
    const { product: productId } = req.body;
    if (typeof productId !== "string") {
      throw new Error("productId must be a string");
    }
    const isValidProduct = await Product.findOne({ _id: productId });
    if (!isValidProduct) {
      throw new NotFoundError(`No product with id : ${productId}`);
    }
    const alreadySubmitted = await Review.findOne({
      product: productId,
      user: req.user.userId,
    });

    if (alreadySubmitted) {
      throw new BadRequestError(`Already submitted review for this product`);
    }

    req.body.user = req.user.userId;
    const review = await Review.create(req.body);
    res
      .status(StatusCodes.CREATED)
      .json({ msg: "Review created successfully", review });
  } else {
    throw new BadRequestError("Invalid or unauthenticated request");
  }
};

export const getAllReviews = async (
  req: CustomRequest,
  res: Response
): Promise<void> => {
  const reviews = await Review.find({}).populate({
    path: "product",
    select: "description subCategory price",
  });
  res.status(StatusCodes.OK).json({ reviews, count: reviews.length });
};

export const getSingleReview = async (
  req: CustomRequest,
  res: Response
): Promise<void> => {
  const { id: reviewId } = req.params;
  if (reviewId) {
    const review = await Review.findOne({ _id: reviewId });
    if (!review) {
      throw new NotFoundError(`No review with id :${reviewId}`);
    }
    res.status(StatusCodes.OK).json({ review });
  } else {
    throw new BadRequestError("Invalid request made");
  }
};

export const updateReview = async (
  req: CustomRequest,
  res: Response
): Promise<void> => {
  const { id: reviewId } = req.params;
  const { rating, title, comment } = req.body;
  if (reviewId && req.user) {
    const review = await Review.findOne({ _id: reviewId });
    if (!review) {
      throw new NotFoundError(`No review with id :${reviewId}`);
    }
    checkPermissions(req.user, review.user.toString());
    review.rating = rating;
    review.title = title;
    review.comment = comment;
    await review.save();
    res
      .status(StatusCodes.OK)
      .json({ msg: "Review updated successfully", review });
  } else {
    throw new BadRequestError("Invalid request made");
  }
};

export const deleteReview = async (
  req: CustomRequest,
  res: Response
): Promise<void> => {
  const { id: reviewId } = req.params;
  if (reviewId && req.user) {
    const review = await Review.findOne({ _id: reviewId });
    if (!review) {
      throw new NotFoundError(`No review with id :${reviewId}`);
    }
    checkPermissions(req.user, review.user.toString());
    await review.deleteOne();
    res.status(StatusCodes.OK).json({ msg: "Review removed successfully" });
  } else {
    throw new BadRequestError("Invalid request made");
  }
};

export const getSingleProductReviews = async (
  req: CustomRequest,
  res: Response
): Promise<void> => {
  const { id: productId } = req.params;
  if (productId) {
    const reviews = await Review.find({ product: productId });
    if (!reviews || reviews.length < 1) {
      throw new NotFoundError("No reviews found for this product");
    }
    res.status(StatusCodes.OK).json({ reviews, count: reviews.length });
  } else {
    throw new BadRequestError("Invalid request made");
  }
};
