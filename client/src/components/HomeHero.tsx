// import Wrapper from "../assets/wrappers/HomeHero";
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
      <ArrowButton
        className="mt-[26px] md:mt-[15px] lg:mt-[15px] xl:mt-[4px] w-[38px] sm:w-[58px] md:w-[78px] md:h-[30px] lg:w-[105px] xl:w-[135px] h-[20px] lg:m-1 lg:h-12 text-[3px] sm:text-[6px] lg:text-[1vw] capitalize px-[0px] lg:px-[4px] py-[2px] lg:py-1"
        text="Shop Now"
        onClick={() => navigate("/products")}
      />
      <BottomHero />
      <CraftingSection />
      <FashionJourney />
    </section>
  );
};
export default HomeHero;
