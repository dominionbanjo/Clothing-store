import { useProductsContext } from "../pages/HomeLayout";
import { useNavigate } from "react-router-dom";

const BottomHero = () => {
  const { productType, setProductType } = useProductsContext();
  const navigate = useNavigate();

  const handleClick = (type: string) => {
    if (setProductType) {
      setProductType(type);
      navigate("/products");
    }
  };

  return (
    <section className="bottom-hero px-[10px] py-0 w-[90%] mt-[30px] lg:mt-[40px] mb-[0px] lg:mb-[50px] flex flex-col lg:flex-row justify-between items-center">
      <div className="bottom-hero-left flex flex-col justify-center w-[100%] lg:w-[40%]">
        <div className="top-options flex md:justify-center lg:justify-normal mb-5 md:mb-10">
          <div
            className={`button-shape button ${
              productType === "Unisex" ? "active" : ""
            }`}
            onClick={() => handleClick("Unisex")}
          >
            Unisex
          </div>
          <div
            className={`button-shape  button ${
              productType === "Men" ? "active" : ""
            }`}
            onClick={() => handleClick("Men")}
          >
            Men
          </div>
          <div
            className={`button-shape button ${
              productType === "Women" ? "active" : ""
            }`}
            onClick={() => handleClick("Women")}
          >
            Women
          </div>
          <div
            className={`button-shape button ${
              productType === "Kids" ? "active" : ""
            }`}
            onClick={() => handleClick("Kids")}
          >
            Kids
          </div>
        </div>
        <div className="left-texts">
          <h2 className=" text-xl sm:text-3xl uppercase mb-4 sm:mb-5">
            Elevate Your Style with StyleLoom
          </h2>
          <p className=" text-sm sm:text-base opacity-60">
            Explore a world of fashion at StyleLoom, where trends meet
            affordability. Immerse yourself in the latest styles and seize
            exclusive promotions.
          </p>
        </div>
      </div>
      <div className="bottom-hero-right flex flex-col justify-center mb-0 mx-auto mt-5 md:mt-16 w-[100%] lg:w-[45%] ">
        <div className="left-hero-grid grid grid-cols-2 grid-rows-2 gap-0 md:gap-5  ">
          <div className="grid-item">
            <h2>1,500 +</h2>
            <p>Fashion Products</p>
          </div>
          <div className="grid-item">
            <h2>50 +</h2>
            <p>New arrivals every month</p>
          </div>
          <div className="grid-item">
            <h2>30%</h2>
            <p>OFF on select items</p>
          </div>
          <div className="grid-item">
            <h2>95%</h2>
            <p>Customer satisfaction rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomHero;
