// import Wrapper from "../assets/wrappers/HomePage";
import HomeHero from "../components/HomeHero";
import HomePageProductsContainer from "../components/HomePageProductsContainer";
import ProductsPageTop from "../components/ProductsPageTop";
// import { useAppSelector } from "../hooks";

const Homepage = () => {
  // const { user } = useAppSelector((store) => store.user);

  return (
    <div className="flex flex-col w-full items-center">
      <HomeHero />
      <ProductsPageTop homepage={true} />
      <HomePageProductsContainer />
    </div>
  );
};
export default Homepage;
