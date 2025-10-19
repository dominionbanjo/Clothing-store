import Product from "../components/Product";
import {
  LoadingContainer,
  Spinner,
} from "../assets/wrappers/HomepageProductsContainer";
import { IProduct } from "../utils/types";
import useGetAllProductsController from "../modules/AllProductsPage/controllers/getAllProductsController";

const HomePageProductsContainer = () => {
  const { products, isLoading, isError } = useGetAllProductsController({
    featured: true,
  });

  if (isLoading) {
    return (
      <LoadingContainer>
        <Spinner />
        <p>Fetching featured products...</p>
      </LoadingContainer>
    );
  }

  if (isError) {
    return (
      <LoadingContainer>
        <p className="text-red-500">Failed to load featured products</p>
      </LoadingContainer>
    );
  }

  const featuredProducts: IProduct[] = products || [];

  return (
    <div className="products-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto w-[90%] custom-border justify-center gap-0">
      {featuredProducts.slice(0, 6).map((product) => (
        <Product key={product._id} {...product} />
      ))}
    </div>
  );
};

export default HomePageProductsContainer;
