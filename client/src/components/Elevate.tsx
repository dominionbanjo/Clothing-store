import Wrapper from "../assets/wrappers/elevate";
import Abstract from "../assets/Images/elevate.png";
import ArrowButton from "./ArrowButton";

const Elevate = () => {
  return (
    <Wrapper>
      <div className="elevate-top">
        <img src={Abstract} alt="" />
        <div className="elevate-top-texts">
          <h2>elevate your wardrobe</h2>
          <p>
            Don't miss out – experience the epitome of fashion by clicking 'Buy
            Now' and embrace a world of chic elegance delivered to your
            doorstep. Your style journey begins here.{" "}
          </p>
          <ArrowButton text="Shop Now" />
        </div>
      </div>
    </Wrapper>
  );
};
export default Elevate;
