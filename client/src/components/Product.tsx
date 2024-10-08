import Wrapper from "../assets/wrappers/Product";
import ArrowButton from "./ArrowButton";

type Product = {
  image: string;
  category: string;
  description: string;
  fit: string;
  price: string;
};
const Product = ({ image, category, description, fit, price }: Product) => {
  return (
    <Wrapper>
      <div className="product-image-container">
        <img src={image} alt="" />
      </div>
      <div className="buttons">
        <div className="category">{category}</div>
        <ArrowButton text="Shop Now" />
      </div>
      <div className="bottom">
        <h4>{description}</h4>
        <div className="specs">
          <div className="options">
            <span>Fit: </span> {fit}
          </div>
          <div className="options">
            <span>Price: </span> {price}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Product;
