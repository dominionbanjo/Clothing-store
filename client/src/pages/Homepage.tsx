import Wrapper from "../assets/wrappers/HomePage";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeHero from "../components/HomeHero";
import MobileHeader from "../components/MobileHeader";

const Homepage = () => {
  return (
    <Wrapper>
      <Header />
      <MobileHeader />
      <HomeHero />
      <Footer />
    </Wrapper>
  );
};
export default Homepage;
