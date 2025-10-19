import { useMemo } from "react";
type Category = string;

export const useCategories = (productType: string): Category[] => {
  return useMemo(() => {
    switch (productType) {
      case "Men":
        return ["Men's Shirts", "Men's Shoes", "Men's Watches"];
      case "Unisex":
        return ["Glasses", "Skincare", "Fragrances"];
      default:
        return ["Women's Wear", "Accessories", "Hand Bag"];
    }
  }, [productType]);
};
