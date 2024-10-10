import { StatusCodes } from "http-status-codes";
import User from "../models/userModel";
import { comparePassword, hashPassword } from "../utils/passwordUtil";
import { createJWT } from "../utils/tokenUtil";
import { UnauthenticatedError, BadRequestError } from "../errors/customError";
import { Request, Response } from "express";
import crypto from "crypto";
import { sendResetPasswordEmail } from "../utils/sendResetPassword";
import createHash from "../utils/createHash";

export const register = async (req: Request, res: Response): Promise<void> => {
  if (req.body.password) {
    const user = await User.create(req.body);
    res.status(StatusCodes.CREATED).json({ msg: "user created successfully" });
  } else {
    throw new BadRequestError("Please provide all fields");
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  if (req.body.email) {
    const user = await User.findOne({ email: req.body.email });
    const validUser: boolean | null =
      user && (await comparePassword(req.body.password, user.password));
    if (!validUser) throw new UnauthenticatedError("invalid credentials");

    const token = createJWT({
      userId: user?._id as string,
      name: user?.firstName as string,
      role: user?.role as string,
    });
    const oneDay = 1000 * 60 * 60 * 24;

    res.cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + oneDay),
      secure: process.env.NODE_ENV === "production",
      signed: true,
    });
    res.status(StatusCodes.OK).json({ msg: "user logged in" });
  } else {
    throw new BadRequestError("Please provide all fields");
  }
};

export const logout = async (req: Request, res: Response): Promise<void> => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out" });
};

export const forgotPassword = async (
  req: Request,
  res: Response
): Promise<void> => {
  if (!req.body.email) {
    throw new BadRequestError("Please provide a valid email");
  }

  const user = await User.findOne({ email: req.body.email });
  if (user) {
    const passwordToken = crypto.randomBytes(70).toString("hex");
    const origin = "https://clean-bees-typescript.onrender.com";
    // const origin2 = "http://localhost:5100";

    await sendResetPasswordEmail({
      name: user.firstName,
      email: user.email,
      token: passwordToken,
      origin,
    });

    const thirtyMinutes = 1000 * 60 * 10;
    const passwordTokenExpirationDate = new Date(Date.now() + thirtyMinutes);

    user.passwordToken = createHash(passwordToken);
    user.passwordTokenExpirationDate = passwordTokenExpirationDate;
    await user.save();
  }
  res
    .status(StatusCodes.OK)
    .json({ msg: "Please check your email for reset password link" });
};

export const resetPassword = async (
  req: Request,
  res: Response
): Promise<void> => {
  if (!req.body.token || !req.body.email || !req.body.password) {
    throw new BadRequestError("Please provide all values");
  }
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    const currentDate = new Date();
    if (
      user.passwordToken === createHash(req.body.token as string) &&
      user.passwordTokenExpirationDate! > currentDate
    ) {
      user.password = req.body.password as string;
      user.passwordToken = null;
      user.passwordTokenExpirationDate = null;
      await user.save();
    }
  }
  res.status(StatusCodes.OK).json({ msg: "password reset successful" });
};