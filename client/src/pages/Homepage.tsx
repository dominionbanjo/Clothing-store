import Wrapper from "../assets/wrappers/HomePage";
import HomeHero from "../components/HomeHero";
import HomePageProductsContainer from "../components/HomePageProductsContainer";
import ProductsPageTop from "../components/ProductsPageTop";

const Homepage = () => {
  return (
    <Wrapper>
      <HomeHero />
      <ProductsPageTop homepage={true} />
      <HomePageProductsContainer />
    </Wrapper>
  );
};
export default Homepage;
