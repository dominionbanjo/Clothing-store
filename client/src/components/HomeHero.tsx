import Wrapper from "../assets/wrappers/HomeHero";
import HeroImg from "../assets/Images/Image.png";
import ShopButton from "./ShopButton";
import BottomHero from "./BottomHero";
import CraftingSection from "./CraftingSection";
import FashionJourney from "./FashionJourney";

const HomeHero = () => {
  return (
    <Wrapper>
      <section className="top-hero">
        <div className="img-container">
          <img src={HeroImg} alt="woman with glasses" />
        </div>
      </section>
      <ShopButton />
      <BottomHero />
      <CraftingSection />
      <FashionJourney />
    </Wrapper>
  );
};
export default HomeHero;
