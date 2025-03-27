import React from "react";
import { useNavigate } from "react-router-dom";

const FilterBar = () => {
  const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    if (selectedCategory && selectedCategory !== "All") {
      navigate(`/productlist?category=${selectedCategory}`);
    } else {
      navigate(`/productlist`);
    }
  };

  return (
    <div className="filter-bar">
      <select onChange={handleCategoryChange} defaultValue="">
        <option value="All">All Categories</option>
        <option value="Smartphone">Smartphone</option>
        <option value="Laptop">Laptop</option>
        <option value="TV">TV</option>
        <option value="Women">Women</option>
        <option value="Men">Men</option>
        <option value="Electronics">Electronics</option>
        <option value="Appliances">Appliances</option>
      </select>
    </div>
  );
};

export default FilterBar;
