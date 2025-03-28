import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext"; 
import categories from "../data/categories";
import "../styles/ProductDetail.css";

const ProductDetails = () => {
  const { categoryId, productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const category = categories.find((cat) => cat.id === categoryId);
  if (!category) return <h2>Category not found</h2>;

  const product = category.products[productId];
  if (!product) return <h2>Product not found</h2>;

  const handleBuyNow = () => {
    addToCart({
      id: productId,
      name: product.name,
      img: product.img,
      price: product.price,
    });

    navigate("/checkout");
  };

  return (
    <div className="product-details">
      <button onClick={() => navigate(-1)} className="back-btn">← Go Back</button>

      <div className="product-container">
        {/* Left Section: Image */}
        <div className="product-image">
          <img src={product.img} alt={product.name} />
        </div>

        {/* Right Section: Details */}
        <div className="product-info">
          <h1 className="product-title-details">{product.name}</h1>
          <p className="product-description-details">{product.description}</p>

          <div className="pricing">
            <h2 className="product-price-details">{product.price}</h2>
          </div>

          <div className="delivery-info-details">
            <p><strong>FREE delivery</strong> by <span>Thursday, 3 April</span></p>
            <p><strong>In stock</strong></p>
          </div>

          <div className="actions">
            <button 
              className="add-to-cart-btn-details"
              onClick={() => addToCart({
                id: productId,
                name: product.name,
                img: product.img,
                price: product.price,
              })}
            >
              Add to Cart
            </button>

            <button 
              className="buy-now-btn-details"
              onClick={handleBuyNow}
            >
               Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
