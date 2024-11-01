import { UnauthorizedError } from "../errors/customError.js";

interface User {
  name: string;
  userId: string;
  role: string;
}

const checkPermissions = (requestUser: User, resourceUserId: string): void => {
  if (requestUser.role === "admin") return;
  if (requestUser.userId === resourceUserId) return;
  throw new UnauthorizedError("Not authorized to access this route");
};

export default checkPermissions;
