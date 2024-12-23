import {
  BadRequestError,
  UnauthenticatedError,
  UnauthorizedError,
  NotFoundError,
} from "../errors/customError.js";
import User from "../models/userModel.js";
import { validationResult, body, ValidationChain } from "express-validator";
import { Request, Response, NextFunction } from "express";

interface ValidationValues {
  msg: string;
}

const withValidationErrors = (validateValues: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validateValues.map((validation) => validation.run(req)));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const errorMessages = errors
        .array()
        .map((error: ValidationValues) => error.msg)
        .join(", ");
      if (errorMessages.startsWith("no job")) {
        return res.status(404).json({ message: errorMessages });
      }
      if (errorMessages.startsWith("not authorized")) {
        return res
          .status(401)
          .json({ message: "Not authorized to access this route" });
      }
      return res.status(400).json({ message: errorMessages });
    }
    next();
  };
};

export const validateRegisterInput = withValidationErrors([
  body("fullName").notEmpty().withMessage("Full name is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError("Email already exists");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters long"),
  body("location").notEmpty().withMessage("location is required"),
]);

export const validateLoginInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format"),
  body("password").notEmpty().withMessage("password is required"),
]);

export const validateUpdateUserInput = withValidationErrors([
  body("fullName").notEmpty().withMessage("Full name is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email });
      if (user && (user._id as string).toString() !== req.user.userId) {
        throw new Error("email already exists");
      }
    }),
  body("location").notEmpty().withMessage("location is required"),
]);

export const validateCreateProductInput = withValidationErrors([
  body("image").notEmpty().withMessage("Image is required"),
  body("category").notEmpty().withMessage("Category is required"),
  body("subCategory").notEmpty().withMessage("Sub Category is required"),
  body("description").notEmpty().withMessage("Description is required"),
  body("fit").notEmpty().withMessage("fit is required"),
  body("price").notEmpty().withMessage("price is required"),
  body("sizes").notEmpty().withMessage("Sizes is required"),
  body("features").notEmpty().withMessage("Features is required"),
]);

export const validateCreateReviewInput = withValidationErrors([
  body("rating").notEmpty().withMessage("Rating is required"),
  body("title").notEmpty().withMessage("Title is required"),
  body("comment").notEmpty().withMessage("Comment is required"),
  body("product").notEmpty().withMessage("Product is required"),
  body("author").notEmpty().withMessage("Author is required"),
]);
