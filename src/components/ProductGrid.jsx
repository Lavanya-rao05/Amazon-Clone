import React from "react";
import { Link } from "react-router-dom";
import categories from "../data/categories";
import "../styles/ProductGrid.css";

const ProductGrid = () => {
  return (
    <div className="product-grid ">
      {categories.slice(1, 5).map((category) => (
        <div key={category.id} className="category inner-white">
          <h2>{category.title}</h2>
          <div className="product-list-grid inner-white">
            {category.products.slice(0, 2).map((product, idx) => (
              <div key={idx} className="product-small-product inner-white">
                <img src={product.img} alt={product.name} />
                <p>{product.name}</p>
              </div>
            ))}
          </div>
          <Link to={`/category/${category.id}`} className="see-more-btn">
            See More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
