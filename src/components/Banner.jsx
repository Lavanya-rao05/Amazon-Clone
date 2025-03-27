import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Banner.css";
import Banner1 from "/assets/Banner1.jpg";
import Banner2 from "/assets/Banner2.jpg";
import Banner3 from "/assets/Banner3.jpg";
import Banner4 from "/assets/Banner4.jpg";
import Banner5 from "/assets/Banner5.png";
import categories from "../data/categories";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledImages, setShuffledImages] = useState([]);
  const navigate = useNavigate();

  const shuffleImages = () => {
    const images = [Banner1, Banner2, Banner3, Banner4, Banner5];
    const shuffled = [...images].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
  };

  useEffect(() => {
    shuffleImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, shuffledImages]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? shuffledImages.length - 1 : prevIndex - 1
    );
  };

  const handleProductClick = (product) => {
    const matchedCategory = categories.find((category) =>
      category.products.some((p) => p.id === product.id)
    );

    if (matchedCategory) {
      navigate(`/product/${matchedCategory.id}/${product.id}`, {
        state: { product },
      });
    } else {
      console.error("Product category not found.");
    }
  };

  const allProducts = categories
    .flatMap((category) =>
      category.products.map((product) => ({
        ...product,
        categoryId: category.id,
      }))
    )
    .slice(0, 9);

  return (
    <div className="banner-container">
      {shuffledImages.length > 0 && (
        <div
          className="banner-fullscreen"
          style={{ backgroundImage: `url(${shuffledImages[currentIndex]})` }}
        >
          <button className="prev-btn" onClick={prevSlide}>
            ❮
          </button>
          <button className="next-btn" onClick={nextSlide}>
            ❯
          </button>

          <div className="products-section">
            <h1 className="products-heading">
              Up to 60% off | Amazon Launchpad
            </h1>

            <div className="products-bottom">
              {allProducts.map((product) => (
                <div
                  key={product.id}
                  className="product-card-banner inner-white"
                  onClick={() => handleProductClick(product)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={product.img} alt={product.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
