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
    <section className="bg-dark_bg flex flex-col w-full items-center">
      <section className="top-hero w-full relative top-8 flex flex-col justify-center items-center my-0 mx-auto">
        <div className="img-container w-full h-auto">
          <img
            className="w-[90%]  my-0 mx-auto block rounded-t-2xl"
            src={HeroImg}
            alt="woman with glasses"
          />
        </div>
      </section>
      <ArrowButton text="Shop Now" onClick={() => navigate("/products")} />
      <BottomHero />
      <CraftingSection />
      <FashionJourney />
    </section>
  );
};
export default HomeHero;
