import { StatusCodes } from "http-status-codes";
import cloudinary from "cloudinary";
import User from "../models/userModel";
import { formatImage } from "../middleware/multerMiddleware";
import { UnauthenticatedError } from "../errors/customError";
import { Request, Response } from "express";

export interface IUser {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  location?: string;
  avatar?: string;
  avatarPublicId?: string;
}

interface CustomRequest extends Request {
  user?: {
    userId: string;
    name: string;
    role: string;
  };
}

export const getCurrentUser = async (
  req: CustomRequest,
  res: Response
): Promise<void> => {
  if (req.user) {
    const user = await User.findOne({ _id: req.user.userId }).select(
      "-password"
    );
    res.status(StatusCodes.OK).json({ user });
  } else {
    throw new UnauthenticatedError("Please login to access this route");
  }
};

export const updateUser = async (
  req: CustomRequest,
  res: Response
): Promise<void> => {
  const newUser: IUser = { ...req.body };
  if (newUser.password) delete newUser.password;

  if (req.file) {
    const file = formatImage(req.file);
    const response = await cloudinary.v2.uploader.upload(file, {
      use_filename: true,
      folder: "Images",
    });
    newUser.avatar = response.secure_url;
    newUser.avatarPublicId = response.public_id;
  }

  const updatedUser = await User.findByIdAndUpdate(req.user?.userId, newUser);
  if (req.file && updatedUser?.avatarPublicId) {
    await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId);
  }
  res.status(StatusCodes.OK).json({ msg: "user updated successfully" });
};
