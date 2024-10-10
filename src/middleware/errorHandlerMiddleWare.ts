import { StatusCodes } from "http-status-codes";
import { Request, Response, NextFunction } from "express";

interface CustomError extends Error {
  statusCode?: number;
  name: string;
}
const errorHandlerMiddleWare = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if ((process.env.NODE_ENV as string) === "development") {
    console.error(err);
  }
  const statusCode: number =
    err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const msg: string = err.message || "Something went wrong try again later";
  res.status(statusCode).json({ msg });
};

export default errorHandlerMiddleWare;
