import mongoose, { Document } from "mongoose";
import { hashPassword } from "../utils/passwordUtil.js";
import { countries } from "../utils/countries.js";

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
  fullName: {
    type: String,
    required: true,
    trim: true,
    maxlength: [60, "Full name cannot be more than 70 characters"],
  },
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 8,
  },
  location: {
    type: String,
    required: true,
    enum: {
      values: countries,
      message: "{VALUE} is not a valid country",
    },
  },
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
