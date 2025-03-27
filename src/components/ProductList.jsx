import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";
import ProductCard from "./ProductCard";
import productsData from "../data/data.json";
import "../styles/ProductList.css";

const ProductList = React.memo(() => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();
  const { theme } = useTheme();

  const getFilteredProducts = useCallback(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category") || "";
    const searchTerm = params.get("search") || "";

    let filtered = Array.isArray(productsData) ? productsData : [];

    if (category && category !== "All") {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [location.search]);

  useEffect(() => {
    const filtered = getFilteredProducts();
    setFilteredProducts(filtered);
  }, [getFilteredProducts]);

  const groupedProducts = useMemo(() => {
    return filteredProducts.reduce((acc, product) => {
      const { category } = product;
      if (!acc[category]) acc[category] = [];
      acc[category].push(product);
      return acc;
    }, {});
  }, [filteredProducts]);

  return (
    <div
      className={`product-list-container ${
        theme === "dark" ? "dark-mode" : ""
      }`}
    >
      {Object.keys(groupedProducts).length > 0 ? (
        Object.entries(groupedProducts).map(([category, products]) => (
          <div key={category} className="category-section">
            <h2 className="category-title">{category}</h2>
            <div className="grid-container">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSeeMore={() =>
                    console.log(`See more about ${product.name}`)
                  }
                  onAddToCart={() =>
                    console.log(`Added ${product.name} to cart`)
                  }
                />
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className="no-products">No products found.</p>
      )}
    </div>
  );
});

export default ProductList;
