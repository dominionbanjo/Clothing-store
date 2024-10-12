import {
  UnauthenticatedError,
  UnauthorizedError,
} from "../errors/customError.js";
import { verifyJWT } from "../utils/tokenUtil.js";
import { Request, Response, NextFunction } from "express";

interface CustomRequest extends Request {
  user?: {
    userId: string;
    name: string;
    role: string;
  };
}

export const authenticateUser = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
): void => {
  const { token } = req.signedCookies;
  if (!token) {
    throw new UnauthenticatedError("authentication invalid!");
  }

  try {
    const { userId, name, role } = verifyJWT(token);
    req.user = { userId, name, role };
    next();
  } catch (error) {
    throw new UnauthenticatedError("authentication invalid!");
  }
};

export const authorizePermissions = (...roles: string[]) => {
  return (req: CustomRequest, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      throw new UnauthorizedError("not authorized to access this route");
    }
    next();
  };
};
