export interface IProduct {
  _id: string;
  image: string;
  category: string;
  subCategory: string;
  description: string;
  fit: string;
  price: number;
  sizes: string[];
  features: string[];
  averageRating: number;
  numOfReviews: number;
  featured: boolean;
  user: string;
  reviews: IReview[];
}

export interface Params {
  featured?: boolean;
}

export interface IReview {
  rating: number;
  title: string;
  comment: string;
  user: string;
  product: string;
  author: string;
}

export type User = {
  _id: string;
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
