import { useQuery } from "@tanstack/react-query";
import Product from "../components/Product";
import customFetch from "../utils/customFetch";
import {
  LoadingContainer,
  Spinner,
} from "../assets/wrappers/HomepageProductsContainer";
import { IProduct } from "../utils/types";

const featuredProductsQuery = () => {
  return {
    queryKey: ["featuredProducts"],
    queryFn: async () => {
      const { data } = await customFetch.get("/products?featured=true");
      return data.products;
    },
  };
};

const HomePageProductsContainer = () => {
  const { data, isLoading } = useQuery(featuredProductsQuery());

  if (isLoading) {
    return (
      <LoadingContainer>
        <Spinner></Spinner>
        <p>Fetching products...</p>
      </LoadingContainer>
    );
  }

  const products: IProduct[] = data || [];

  return (
    <div className="products-container  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto w-[90%] custom-border  justify-center gap-0 ">
      {products.slice(0, 6).map((product) => (
        <Product key={product._id} {...product} />
      ))}
    </div>
  );
};

export default HomePageProductsContainer;
