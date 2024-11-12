// import { useState } from "react";
// import CartItem from "./CartItem";
// import Wrapper from "../assets/wrappers/CartContainer";
// import type { Product } from "../types";

// type CartContainerProps = {
//   cartItems: Product[];
//   onRemoveItem: (productId: string) => void;
// };

// const CartContainer = ({ cartItems, onRemoveItem }: CartContainerProps) => {
//   const totalPrice = cartItems.reduce(
//     (total, item) => total + parseFloat(item.price),
//     0
//   );

//   return (
//     <Wrapper>
//       <h2>Shopping Cart</h2>
//       <div className="cart-items">
//         {cartItems.length ? (
//           cartItems.map((product) => (
//             <CartItem
//               key={product.id}
//               product={product}
//               onRemove={onRemoveItem}
//             />
//           ))
//         ) : (
//           <p>Your cart is empty</p>
//         )}
//       </div>
//       <div className="cart-total">
//         <h3>Total: ${totalPrice.toFixed(2)}</h3>
//         <button className="checkout-button">Proceed to Checkout</button>
//       </div>
//     </Wrapper>
//   );
// };

// export default CartContainer;
