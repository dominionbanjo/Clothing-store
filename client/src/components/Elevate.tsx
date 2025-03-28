// import Wrapper from "../assets/wrappers/elevate";
import { useNavigate } from "react-router-dom";
import Abstract from "../assets/Images/elevate.png";
import ArrowButton from "./ArrowButton";

const Elevate = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[95%] lg:w-[90%] bg-[#c2b4a3] p-[10px_10px] lg:p-[40px_30px] rounded-[20px] mx-auto mb-[40px] lg:mb-[150px]">
      <div className="relative w-full text-left pl-[20px] lg:pl-[40px] mb-[40px] lg:mb-[60px]">
        <img
          src={Abstract}
          alt=""
          className="absolute top-[-8px] lg:top-[-40px] right-[-8px] lg:right-[-30px] w-[220px] lg:w-[455px] h-auto rounded-tr-[10px] z-[-1]"
        />
        <div className="relative w-[95%] lg:w-[85%] text-black">
          <h2 className="text-[30px] lg:text-[50px] uppercase tracking-[1.5px] mb-[15px] lg:mb-[20px]">
            Elevate Your Wardrobe
          </h2>
          <p className="w-[95%] lg:w-[90%] text-[14px] lg:text-[15px] tracking-[1.5px]">
            Don't miss out – experience the epitome of fashion by clicking 'Buy
            Now' and embrace a world of chic elegance delivered to your
            doorstep. Your style journey begins here.
          </p>
          <button className="relative text-white w-full lg:absolute lg:w-auto right-0 lg:right-[-120px] top-[25px] lg:top-[70px] border-none p-[0_13px] text-[19px] lg:text-[initial]">
            {/* <ArrowButton text="Shop Now" /> */}
            <ArrowButton
              text="Shop Now"
              onClick={() => navigate("/products")}
              className="relative w-full h-[44px] rounded-[9px] lg:rounded-[8px] right-0 top-[-16px] text-[23px] sm:w-full sm:h-[50px] sm:mt-[15px] sm:text-[23px]  
              md:w-full md:h-[50px] md:mt-[15px] md:text-[18px]  
              lg:w-[105px] lg:h-12 l lg:text-[1vw] lg:top-[10px] lg:right-[-10px]
              xl:w-[135px] xl:mt-[4px] bg-[#1f1f1f] flex items-center justify-center 
              capitalize"
              iconClassName="text-[23px] sm:text-[23px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Elevate;
