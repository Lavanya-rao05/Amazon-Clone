import React from "react";
import { useCart } from "../Context/CartContext";
import "../styles/CartPage.css";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (productId, amount) => {
    const updatedCart = cart.map((item) =>
      item.id === productId
        ? { ...item, quantity: Math.max(item.quantity + amount, 1) }
        : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.location.reload();
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price =
        typeof item.price === "string"
          ? parseFloat(item.price.replace(/[^0-9.]/g, ""))
          : item.price;

      return total + price * item.quantity;
    }, 0);
  };

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2 className="cart-h2">Your Cart is Empty 🛒</h2>
        <button className="btn" onClick={() => navigate("/")}>
          Go Shopping
        </button>
      </div>
    );
  }
  const addToCart = (product) => {
    const newCartItem = {
      ...product,
      price:
        typeof product.price === "string"
          ? parseFloat(product.price.replace(/[^0-9.]/g, "")) // Normalize price
          : product.price,
    };

    const updatedCart = [...cart, newCartItem];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="cart-page">
      <h2 className="cart-h2">Shopping Cart</h2>

      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item inner-white">
            <img src={item.img} alt={item.name} />

            <div className="item-details inner-white">
              <h3>{item.name}</h3>
              <p>Price: {item.price}</p>

              <div className="quantity-controls inner-white">
                <button onClick={() => handleQuantityChange(item.id, -1)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, 1)}>
                  +
                </button>
              </div>

              <p>
                Subtotal: ₹
                {(
                  (typeof item.price === "string"
                    ? parseFloat(item.price.replace(/[^0-9.]/g, ""))
                    : item.price) * item.quantity
                ).toLocaleString("en-IN")}
              </p>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total: ₹{getTotalPrice()}</h3>
        <button onClick={clearCart} className="clear-cart-btn">
          Clear Cart
        </button>
        <button className="checkout-btn" onClick={() => navigate("/checkout")}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
