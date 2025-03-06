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
    <section className="bottom-hero">
      <div className="bottom-hero-left">
        <div className="top-options">
          <div
            className={`button-shape button ${
              productType === "Unisex" ? "active" : ""
            }`}
            onClick={() => handleClick("Unisex")}
          >
            Unisex
          </div>
          <div
            className={`button-shape button ${
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
          <h2>Elevate Your Style with StyleLoom</h2>
          <p>
            Explore a world of fashion at StyleLoom, where trends meet
            affordability. Immerse yourself in the latest styles and seize
            exclusive promotions.
          </p>
        </div>
      </div>
      <div className="bottom-hero-right">
        <div className="left-hero-grid">
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
