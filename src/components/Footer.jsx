import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a href="#top">Back to top</a>
      </div>

      <div className="footer-content">
        <div className="footer-column">
          <h4>Get to Know Us</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Connect with Us</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Make Money with Us</h4>
          <ul>
            <li>Sell on Our Store</li>
            <li>Affiliate Program</li>
            <li>Advertise Your Products</li>
            <li>Business Accounts</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Let Us Help You</h4>
          <ul>
            <li>Your Account</li>
            <li>Returns Center</li>
            <li>100% Purchase Protection</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-language">English | India</div>
        <div className="footer-copyright">
          © 2025 Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </footer>
  );
};

export default Footer;
