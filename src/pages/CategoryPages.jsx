import React from "react";
import { useParams, Link } from "react-router-dom";
import categories from "../data/categories";
import "../styles/CategoryPage.css";

const CategoryPage = () => {
  const { id } = useParams();
  const category = categories.find((cat) => cat.id === id);

  if (!category) {
    return <h2 className="category-h2">Category not found</h2>;
  }

  return (
    <div className="category-page">
      <Link to="/" className="back-btn">
        Back to Home
      </Link>
      <h2 className="category-h2">{category.title}</h2>
      <div className="product-list">
        {category.products.map((product, index) => (
          <Link
            key={index}
            to={`/product/${id}/${index}`}
            className="product-link"
          >
            <div className="product-large-product inner-white">
              <img src={product.img} alt={product.name} />
              <p>{product.name}</p>

              <div className="price inner-white">{product.price}</div>

              <div className="ratings inner-white">
                <span className="stars">★★★★☆</span>
              </div>

              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
