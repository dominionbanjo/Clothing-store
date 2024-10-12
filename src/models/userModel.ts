import mongoose, { Document } from "mongoose";
import { hashPassword } from "../utils/passwordUtil.js";
export interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
  location: string;
  role: "user" | "admin";
  avatar?: string;
  avatarPublicId?: string;
  passwordToken?: string | null;
  passwordTokenExpirationDate?: Date | null;
  toJSON(): Omit<IUser, "password">;
}

const UserSchema = new mongoose.Schema<IUser>({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  location: { type: String, required: true },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  avatar: { type: String },
  avatarPublicId: { type: String },
  passwordToken: {
    type: String,
  },
  passwordTokenExpirationDate: {
    type: Date,
  },
});

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await hashPassword(this.password);
});

UserSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

export default mongoose.model<IUser>("User", UserSchema);
