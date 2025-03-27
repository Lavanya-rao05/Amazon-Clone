import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext"; // Import cart context
import categories from "../data/categories";
import "../styles/ProductDetail.css";

const ProductDetails = () => {
  const { categoryId, productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const category = categories.find((cat) => cat.id === categoryId);
  if (!category) {
    return <h2>Category not found</h2>;
  }

  const product = category.products[productId];
  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-details">
      <button onClick={() => navigate(-1)} className="back-btn">
        Go Back
      </button>

      <div className="product-content">
        <img src={product.img} alt={product.name} />
        <div className="details">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h3>Price: {product.price}</h3>

          <button
            className="add-to-cart-btn"
            onClick={() =>
              addToCart({
                id: productId,
                name: product.name,
                img: product.img,
                price: product.price,
              })
            }
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
