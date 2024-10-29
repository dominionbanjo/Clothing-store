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
