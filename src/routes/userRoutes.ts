import { Router } from "express";
const router = Router();

import { getCurrentUser, updateUser } from "../controllers/userController";
import upload from "../middleware/multerMiddleware";
import { validateUpdateUserInput } from "../middleware/validationMiddleware";

router.get("/current-user", getCurrentUser);
router.patch(
  "/update-user",
  upload.single("avatar"),
  validateUpdateUserInput,
  updateUser
);

export default router;
