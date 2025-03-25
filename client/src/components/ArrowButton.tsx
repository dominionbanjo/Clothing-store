// import Wrapper from "../assets/wrappers/ShopButton";
import { GoArrowUpRight } from "react-icons/go";

type ArrowButtonProps = {
  text: string;
  onClick?: () => void;
};

const ArrowButton: React.FC<ArrowButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="mt-[26px] md:mt-[15px] lg:mt-[15px] xl:mt-[4px] w-[38px] sm:w-[58px] md:w-[78px] md:h-[30px] lg:w-[105px] xl:w-[135px]  h-[20px] lg:m-1 flex bg-[#1f1f1f] rounded-sm  lg:rounded-md items-center justify-center  lg:h-12 text-[3px] sm:text-[6px] lg:text-[1vw] capitalize px-[0px] lg:px-[4px] py-[2px]  lg:py-1 custom-border border-1 lg:border-2"
      onClick={onClick}
    >
      {text} <GoArrowUpRight className="text-[6px] sm:text-[8px] lg:text-xl" />
    </button>
  );
};

export default ArrowButton;
