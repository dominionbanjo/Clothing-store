import Wrapper from "../assets/wrappers/HomeHero";
import HeroImg from "../assets/Images/Image.png";
import BottomHero from "./BottomHero";
import CraftingSection from "./CraftingSection";
import FashionJourney from "./FashionJourney";
import ArrowButton from "./ArrowButton";
import { useNavigate } from "react-router-dom";

const HomeHero = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <section className="top-hero">
        <div className="img-container">
          <img src={HeroImg} alt="woman with glasses" />
        </div>
      </section>
      <ArrowButton text="Shop Now" onClick={() => navigate("/products")} />
      <BottomHero />
      <CraftingSection />
      <FashionJourney />
    </Wrapper>
  );
};
export default HomeHero;
