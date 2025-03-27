import React from "react";
import { useCart } from "../components/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  if (cart.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cart.map((item, index) => (
        <div key={index} className="cart-item ">
          <img src={item.img} alt={item.name} />
          <div className="item-details">
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}

      <button onClick={clearCart} className="clear-cart-btn">
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
