import jwt from "jsonwebtoken";

interface jwtPayload {
  userId: string;
  name: string;
  role: string;
}
export const createJWT = (payload: jwtPayload): string => {
  const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRES_IN as string,
  });
  return token;
};

export const verifyJWT = (token: string): jwtPayload => {
  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET as string
  ) as jwtPayload;
  return decoded;
};
