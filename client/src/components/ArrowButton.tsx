import Wrapper from "../assets/wrappers/ShopButton";
import { GoArrowUpRight } from "react-icons/go";
const ArrowButton = ({ text }: { text: string }) => {
  return (
    <Wrapper>
      {text} <GoArrowUpRight />
    </Wrapper>
  );
};
export default ArrowButton;
