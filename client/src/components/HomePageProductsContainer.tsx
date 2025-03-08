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
    <div className="products-container">
      {products.slice(0, 6).map((product) => (
        <Product key={product._id} {...product} />
      ))}
    </div>
  );
};

export default HomePageProductsContainer;
