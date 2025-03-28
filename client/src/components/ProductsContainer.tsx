import Product from "../components/Product";
import { useState, useEffect, useMemo } from "react";
import ArrowButton from "./ArrowButton";
import { useProductsContext } from "../pages/HomeLayout";
import customFetch from "../utils/customFetch";
import { IProduct } from "../utils/types";
import {
  LoadingContainer,
  Spinner,
} from "../assets/wrappers/HomepageProductsContainer";
import { useQuery } from "@tanstack/react-query";

const productsQuery = () => {
  return {
    queryKey: ["Products"],
    queryFn: async () => {
      const { data } = await customFetch.get("/products");
      return data.products;
    },
  };
};

// Define a type for category keys
type Category = string;

// Hook to manage categories based on productType
const useCategories = (productType: string): Category[] => {
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

// Hook to manage visible counts and showMore state
const useVisibleProducts = (categories: Category[]) => {
  const initialVisibleCounts = useMemo(
    () =>
      categories.reduce((acc, category) => {
        acc[category] = 3; // Default visible count
        return acc;
      }, {} as Record<Category, number>),
    [categories]
  );

  const initialShowMore = useMemo(
    () =>
      categories.reduce((acc, category) => {
        acc[category] = false; // Default showMore state
        return acc;
      }, {} as Record<Category, boolean>),
    [categories]
  );

  const [visibleCounts, setVisibleCounts] = useState(initialVisibleCounts);
  const [showMore, setShowMore] = useState(initialShowMore);

  // Reset visibleCounts and showMore when categories change
  useEffect(() => {
    setVisibleCounts(initialVisibleCounts);
    setShowMore(initialShowMore);
  }, [initialVisibleCounts, initialShowMore]);

  return { visibleCounts, showMore, setVisibleCounts, setShowMore };
};

// Main component
const ProductsContainer = () => {
  const { productType } = useProductsContext();
  const categories = useCategories(productType);
  const { visibleCounts, showMore, setVisibleCounts, setShowMore } =
    useVisibleProducts(categories);

  const { data, isLoading } = useQuery(productsQuery());

  // const [products, setProducts] = useState<IProduct[]>([]);
  // const [isLoading, setIsLoading] = useState(true);

  // Fetch products
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const { data } = await customFetch.get("/products");
  //       setProducts(data.products);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  if (isLoading) {
    return (
      <LoadingContainer>
        <Spinner />
        <p>Fetching products...</p>
      </LoadingContainer>
    );
  }

  const products: IProduct[] = data || [];

  // Handle toggling view for a subCategory
  const handleToggleView = (subCategory: Category) => {
    const filteredProductsCount = products.filter(
      (product) => product.subCategory === subCategory
    ).length;

    setVisibleCounts((prevCounts) => ({
      ...prevCounts,
      [subCategory]: showMore[subCategory] ? 3 : filteredProductsCount,
    }));

    setShowMore((prevShowMore) => ({
      ...prevShowMore,
      [subCategory]: !prevShowMore[subCategory],
    }));
  };

  return (
    <>
      {categories.map((subCategory) => {
        const filteredProducts = products.filter(
          (product) => product.subCategory === subCategory
        );
        const isShowMoreVisible = filteredProducts.length > 3;

        return (
          <section className="dress-section gen-sec w-full" key={subCategory}>
            <div className="section-top custom-border w-[90%]  px-[15px] py-[20px] flex justify-between items-center mx-auto my-0">
              <h2 className="uppercase text-[20px] md:text-4xl">
                {subCategory}
              </h2>
              <ArrowButton text="View All" />
            </div>
            <div className="products-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[90%]   mx-auto my-0 justify-center gap:0">
              {filteredProducts
                .slice(0, visibleCounts[subCategory])
                .map((product) => (
                  <Product key={product._id} {...product} />
                ))}
            </div>
            {isShowMoreVisible && (
              <button
                className="view-more flex my-[10px] mx-auto custom-border px-[15px] py-[8px]"
                onClick={() => handleToggleView(subCategory)}
              >
                {showMore[subCategory] ? "Show Less" : "View More"}
              </button>
            )}
          </section>
        );
      })}
    </>
  );
};

export default ProductsContainer;
