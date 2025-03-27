import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AmazonNavbar from "./components/NavBar";
import CreateAccount from "./pages/CreateAccount";
import SignIn from "./pages/Signin";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPages";
import ProductDetails from "./pages/ProductDetails";
import "./App.css";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./Context/CartContext";
import CheckoutPage from "./pages/CheckoutPage";
import { OrdersProvider } from "./Context/OrdersContext";
import OrdersPage from "./pages/Orders";
import ProductList from "./components/ProductList";
import { ThemeProvider, useTheme } from "./Context/ThemeContext";  

const AppContent = () => {
  const location = useLocation();
  const { theme } = useTheme();  

  const showNavbar =
    location.pathname !== "/create-account" && location.pathname !== "/signin";

  return (
    <div className={`app-container ${theme === "dark" ? "dark-mode" : "light-mode"}`}>
      {showNavbar && <AmazonNavbar />}
      <div className={`${!showNavbar ? "full-page" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/product/:categoryId/:productId" element={<ProductDetails />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <CartProvider>
        <OrdersProvider>
          <AppContent />
        </OrdersProvider>
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
