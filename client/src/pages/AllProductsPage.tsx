// import Wrapper from "../assets/wrappers/AllProductsPage";
import ProductsContainer from "../components/ProductsContainer";
import ProductsPageTop from "../components/ProductsPageTop";

const AllProducts = () => {
  return (
    <>
      <div className="">
        <ProductsPageTop homepage={false} />
        <ProductsContainer />
      </div>
    </>
  );
};

export default AllProducts;
