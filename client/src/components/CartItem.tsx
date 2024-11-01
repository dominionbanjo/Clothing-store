import Wrapper from "../assets/wrappers/CartItem";
import type { Product } from "../types";

type CartItemProps = {
  product: Product;
  onRemove: (productId: string) => void; // or another identifier type if needed
};

const CartItem = ({ product, onRemove }: CartItemProps) => {
  return (
    <Wrapper>
      <div className="cart-item-image">
        <img src={product.image} alt={product.description} />
      </div>
      <div className="cart-item-details">
        <h4>{product.description}</h4>
        <p>{product.category}</p>
        <p>Fit: {product.fit}</p>
        <p>Price: {product.price}</p>
        <button onClick={() => onRemove(product.id)}>Remove</button>
      </div>
    </Wrapper>
  );
};

export default CartItem;
