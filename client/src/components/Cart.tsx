import Wrapper from "../assets/wrappers/cart";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { toast } from "react-toastify";

import { useAppSelector, useAppDispatch } from "../hooks";
import { increase, decrease, clearCart } from "../../features/cartSlice";
import { useCartContext } from "../context/cartContext";
import { createOrder } from "../../features/orderSlice";

interface CartProps {
  mobile: boolean;
}

const Cart = ({ mobile }: CartProps) => {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((store) => store.cart);
  const { user } = useAppSelector((store) => store.user);
  const { setShowCart } = useCartContext();

  const handleCloseCart = () => setShowCart(false);

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.amount, 0);

  const handleCheckout = async () => {
    if (!user) {
      toast.error("Please log in before checking out.");
      return;
    }

    if (cartItems.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }

    try {
      const total = calculateTotal();
      const tax = total * 0.05; // Example 5% tax
      const shippingFee = 500; // Example flat fee

      const payload = {
        items: cartItems.map((item) => ({
          product: item.productId,
          amount: item.amount,
        })),
        tax,
        shippingFee,
        email: user.email,
      };

      const result = await dispatch(createOrder(payload));

      // Access result payload from Redux Thunk
      if (createOrder.fulfilled.match(result)) {
        const { paymentUrl } = result.payload;

        if (paymentUrl) {
          toast.success("Redirecting to payment...");
          dispatch(clearCart());
          window.location.href = paymentUrl; // ✅ Redirect to Paystack
        } else {
          toast.error("Payment URL missing. Try again.");
        }
      } else {
        toast.error(result.payload || "Failed to create order.");
      }
    } catch (err) {
      toast.error("Something went wrong during checkout.");
      console.error(err);
    }
  };

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
              <button onClick={handleCheckout}>Checkout</button>
            </div>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default Cart;
