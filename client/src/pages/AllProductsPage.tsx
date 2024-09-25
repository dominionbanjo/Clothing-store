import Wrapper from "../assets/wrappers/AllProductsPage";
import ProductsContainer from "../components/ProductsContainer";
import ProductsPageTop from "../components/ProductsPageTop";

const AllProducts = () => {
  return (
    <Wrapper>
      <ProductsPageTop homepage={false} />
      <ProductsContainer />
    </Wrapper>
  );
};

export default AllProducts;
