export type User = {
  fullName: string;
  email: string;
  password: string;
  location: string;
  role: "user" | "admin";
  avatar?: string;
  avatarPublicId?: string;
  passwordToken?: string | null;
  passwordTokenExpirationDate?: Date | null;
};
