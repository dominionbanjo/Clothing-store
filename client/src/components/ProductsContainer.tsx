import Product from "../components/Product";
import ArrowButton from "./ArrowButton";
import { useProductsContext } from "../pages/HomeLayout";
import { IProduct } from "../utils/types";
import {
  LoadingContainer,
  Spinner,
} from "../assets/wrappers/HomepageProductsContainer";
import { useVisibleProducts } from "../modules/AllProductsPage/utils/useVisibleProducts";
import { useCategories } from "../modules/AllProductsPage/utils/useCategory";
import useGetAllProductsController from "../modules/AllProductsPage/controllers/getAllProductsController";

type Category = string;

const ProductsContainer = () => {
  const { productType } = useProductsContext();
  const categories = useCategories(productType);
  const { visibleCounts, showMore, setVisibleCounts, setShowMore } =
    useVisibleProducts(categories);

  const { products, isLoading, isError } = useGetAllProductsController();

  if (isLoading) {
    return (
      <LoadingContainer>
        <Spinner />
        <p>Fetching products...</p>
      </LoadingContainer>
    );
  }

  if (isError) {
    return (
      <LoadingContainer>
        <p className="text-red-500">Failed to load products </p>
      </LoadingContainer>
    );
  }

  const allProducts: IProduct[] = products || [];

  const handleToggleView = (subCategory: Category) => {
    const filteredProductsCount = allProducts.filter(
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
        const filteredProducts = allProducts.filter(
          (product) => product.subCategory === subCategory
        );
        const isShowMoreVisible = filteredProducts.length > 3;

        return (
          <section className="w-full dress-section gen-sec" key={subCategory}>
            <div className="section-top custom-border w-[90%]  px-[15px] py-[20px] flex justify-between items-center mx-auto my-0">
              <h2 className="uppercase text-[20px] md:text-4xl">
                {subCategory}
              </h2>
              <ArrowButton text="View All" />
            </div>

            <div className="products-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto my-0 justify-center gap:0">
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
