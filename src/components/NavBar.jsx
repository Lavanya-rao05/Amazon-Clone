import React, { useState, useEffect } from "react";
import "../styles/NavBar.css";
import {
  FaSearch,
  FaShoppingCart,
  FaMapMarkerAlt,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import AccountLists from "./AccountList";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useOrders } from "../Context/OrdersContext";
import { useTheme } from "../Context/ThemeContext";

const Navbar = () => {
  const { cart } = useCart();
  const { orders } = useOrders();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearch = () => {
    const query = new URLSearchParams();

    if (searchTerm) {
      query.set("search", searchTerm);
    }
    if (selectedCategory !== "All") {
      query.set("category", selectedCategory);
    }

    navigate(`/productlist?${query.toString()}`);
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    if (category !== "All") {
      navigate(`/productlist?category=${category}`);
    } else {
      navigate(`/productlist`);
    }
  };

  const [location, setLocation] = useState(
    localStorage.getItem("location") || "Mumbai 400001"
  );

  const [isEditing, setIsEditing] = useState(false);
  const [newLocation, setNewLocation] = useState("");

  useEffect(() => {
    localStorage.setItem("location", location);
  }, [location]);

  const locations = [
    "Mumbai 400001",
    "Delhi 110001",
    "Bangalore 560001",
    "Chennai 600001",
    "Hyderabad 500001",
    "Pune 411001",
    "Kolkata 700001",
    "Ahmedabad 380001",
  ];

  const handleUpdate = () => {
    if (newLocation) {
      setLocation(newLocation);
      setIsEditing(false);
    }
  };

  return (
    <nav className={`navbar-container ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="navbar-left">
        {/* Amazon logo starts here */}
        <Link to="/" className="amazon-logo-main">
          <img src="/assets/AmazonLogo.png" alt="Amazon Logo" />
        </Link>
      </div>
      {/* Amazon logo ends here */}

      {/* Address starts here */}
      <div className="address">
        <FaMapMarkerAlt className="icon" />
        <div className="address-text">
          <p>Delivering to {location}</p>

          {isEditing ? (
            <div className="location-edit">
              <select
                value={newLocation}
                onChange={(e) => setNewLocation(e.target.value)}
              >
                <option value="">Select location</option>
                {locations.map((loc, index) => (
                  <option key={index} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
              <button onClick={handleUpdate}>Save</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          ) : (
            <Link
              to="#"
              onClick={() => setIsEditing(true)}
              className="update-location-link"
              style={{ textDecoration: "none" }}
            >
              Update location
            </Link>
          )}
        </div>
      </div>
      {/* Address ends here */}

      {/* search bar starts here */}
      <div className="navbar-center">
        <div className="dropdown-container inner-white">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="category-dropdown"
          >
            <option value="All">All</option>
            <option value="Smartphone">Smartphone</option>
            <option value="TV">TV</option>
            <option value="Women">Women</option>
            <option value="Men">Men</option>
            <option value="Electronics">Electronics</option>
          </select>
        </div>

        <input
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
        />

        <button className="search-btn" onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>
      {/* search ends here */}

      <div className="navbar-right">
        {/* flag starts here */}
        <div className="flag-container">
          <span>
            <img src="/assets/indian-flag.png" alt="India" />
            EN
          </span>
        </div>
        {/*fllag ends here */}

        {/* dark mode starts here */}
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        {/* dark mode ends here */}

        {/* Account starts here */}
        <div className="account">
          <AccountLists />
        </div>
        {/* Account ends here */}

        {/* orders starts here */}
        <Link
          to="/orders"
          className="orders"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <p>Returns</p>
          <span>& Orders ({orders.length})</span>
        </Link>
        {/* orders ends here */}

        {/* cart starts here */}
        <Link to="/cart" className="cart" style={{ textDecoration: "none" }}>
          <FaShoppingCart className="cart-icon" />
          <span className="cart-count">{cart.length}</span>
        </Link>
        {/* cart ends here */}
      </div>
    </nav>
  );
};

export default Navbar;
