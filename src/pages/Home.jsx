import React from "react";
import Banner from "../components/Banner";
import ProductGrid from "../components/ProductGrid";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <ProductGrid />
      <ProductList />
      <Footer />
    </div>
  );
};

export default Home;
