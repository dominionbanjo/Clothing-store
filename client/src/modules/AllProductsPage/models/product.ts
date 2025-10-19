export interface IProduct {
  id: string;
  _id: string;
  image: string;
  price: number;
  category: string;
  subCategory: string;
  fit: string;
  description: string;
  sizes: string[];
  features: string[];
  featured: boolean;
  averageRating: number;
  numOfReviews: number;
  user: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProductsResponse {
  products: IProduct[];
  count: number;
}
