import { QueryClient, useQuery } from "@tanstack/react-query";
import Product from "../components/Product";
import customFetch from "../utils/customFetch";
import {
  LoadingContainer,
  Spinner,
} from "../assets/wrappers/HomepageProductsContainer";
// import { products } from "../utils/products";
// import { useLoaderData } from "react-router-dom";
import { IProduct } from "../utils/types";

import { Params } from "../utils/types";

// interface LoaderData {
//   searchValues: Params;
// }

const featuredProductsQuery = () => {
  return {
    queryKey: ["featuredProducts"],
    queryFn: async () => {
      const { data } = await customFetch.get("/products?featured=true");
      return data.products;
    },
  };
};

export const loader = (queryClient: QueryClient) => async () => {
  const params: Params = {
    featured: true,
  };

  await queryClient
    .ensureQueryData(featuredProductsQuery())
    .then((res) => {
      if (res.status === 500) {
        throw new Response("Not Found", { status: 500 });
      }
    })
    .catch((error) => {
      console.error(error);
    });
  return { searchValues: params };
};

const HomePageProductsContainer = () => {
  // const { searchValues } = useLoaderData() as LoaderData;

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
