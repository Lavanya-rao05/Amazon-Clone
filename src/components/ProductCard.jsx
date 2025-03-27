import React from "react";
import { useTheme } from "../Context/ThemeContext";
import { useCart } from "../Context/CartContext";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  const { theme } = useTheme();
  const { addToCart } = useCart();
  return (
    <div
      className={`product-card inner-white ${
        theme === "dark" ? "dark-mode-card" : ""
      }`}
    >
      <img src={product.img} alt={product.title} className="product-image" />

      <div className="product-info inner-white">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-price">{product.price}</p>

        <div className="product-actions inner-white">
          <button
            className="btn add-to-cart-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
