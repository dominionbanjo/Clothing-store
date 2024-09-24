import Wrapper from "../assets/wrappers/AllProductsPage";
import Elevate from "../components/Elevate";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import ProductsContainer from "../components/ProductsContainer";
import ProductsPageTop from "../components/ProductsPageTop";
import TestimonialSection from "../components/TestimonialSection";

const AllProducts = () => {
  return (
    <Wrapper>
      <Header />
      <MobileHeader />
      <ProductsPageTop homepage={false} />
      <ProductsContainer />
      <TestimonialSection />
      <Elevate />
      <Footer />
    </Wrapper>
  );
};

export default AllProducts;
