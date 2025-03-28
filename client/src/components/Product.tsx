import Wrapper from "../assets/wrappers/Product";
import ArrowButton from "./ArrowButton";
import { IProduct } from "../utils/types";
import { Link } from "react-router-dom";

const Product = ({
  _id,
  image,
  category,
  description,
  fit,
  price,
}: IProduct) => {
  return (
    <Wrapper>
      <div className="product-image-container">
        <img src={image} alt="" />
      </div>
      <div className="buttons">
        <div className="category">{category}</div>
        <Link to={`/products/${_id}`}>
          <ArrowButton
            className="mt-[10px]"
            iconClassName="text-[16px] sm:text-[20px]"
            text="Shop Now"
          />
        </Link>
      </div>
      <div className="bottom">
        <h4>{description}</h4>
        <div className="specs">
          <div className="options">
            <span>Fit: </span> {fit}
          </div>
          <div className="options">
            <span>Price: </span>$ {price}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Product;
