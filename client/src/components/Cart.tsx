import Wrapper from "../assets/wrappers/cart";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

import { useAppSelector, useAppDispatch } from "../hooks";
import { increase, decrease, clearCart } from "../../features/cartSlice";

interface CartProps {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  mobile: boolean;
}

const Cart = ({ setShowCart, mobile }: CartProps) => {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((store) => store.cart);

  const handleCloseCart = () => setShowCart(false);

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.amount, 0);

  return (
    <Wrapper $mobile={mobile}>
      <div className="cart-container">
        <h1>Your Cart</h1>
        <MdClose onClick={handleCloseCart} className="close" />
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.productId} className="cart-item">
              <img
                src={item.image}
                alt={item.description}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h4>{item.description}</h4>
                <p>${item.price}</p>
                <div className="quantity">
                  <p>Quantity</p>
                  <div className="modify">
                    <FaMinus
                      onClick={() => dispatch(decrease(item.productId))}
                    />
                    {item.amount}
                    <FaPlus
                      onClick={() => dispatch(increase(item.productId))}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length > 0 && (
          <>
            <div className="cart-total">
              <h2>Total: ${calculateTotal().toFixed(2)}</h2>
            </div>
            <div className="buttons">
              <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
              <button>Checkout</button>
            </div>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default Cart;
