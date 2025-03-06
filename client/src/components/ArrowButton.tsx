import Wrapper from "../assets/wrappers/ShopButton";
import { GoArrowUpRight } from "react-icons/go";

type ArrowButtonProps = {
  text: string;
  onClick?: () => void;
};

const ArrowButton: React.FC<ArrowButtonProps> = ({ text, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      {text} <GoArrowUpRight />
    </Wrapper>
  );
};

export default ArrowButton;
