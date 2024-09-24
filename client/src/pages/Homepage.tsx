import Wrapper from "../assets/wrappers/HomePage";
import Elevate from "../components/Elevate";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeHero from "../components/HomeHero";
import HomePageProductsContainer from "../components/HomePageProductsContainer";
import MobileHeader from "../components/MobileHeader";
import ProductsPageTop from "../components/ProductsPageTop";
import TestimonialSection from "../components/TestimonialSection";

const Homepage = () => {
  return (
    <Wrapper>
      <Header />
      <MobileHeader />
      <HomeHero />
      <ProductsPageTop homepage={true} />
      <HomePageProductsContainer />
      <TestimonialSection />
      <Elevate />
      <Footer />
    </Wrapper>
  );
};
export default Homepage;
