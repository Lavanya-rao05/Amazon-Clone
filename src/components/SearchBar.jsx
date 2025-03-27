import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      const params = new URLSearchParams(location.search);
      
      params.set("search", searchTerm);
      
      const categories = ["Smartphone", "Laptop", "TV", "Women", "Men", "Electronics"];
      if (categories.includes(searchTerm)) {
        params.set("category", searchTerm);
      }
      
      navigate(`/productlist?${params.toString()}`);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleSearch}
        placeholder="Search products..."
      />
      <button onClick={handleSearch}>🔍</button>
    </div>
  );
};

export default SearchBar;
