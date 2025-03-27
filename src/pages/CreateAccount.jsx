import React from "react";
import "../styles/CreateAccount.css";
import amazonLogo from "/assets/AmazonLogo2.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CreateAccount = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form validation
  const validateForm = () => {
    let tempErrors = {};
    const mobileRegex = /^[0-9]{10}$/; // Mobile number validation

    if (!formData.username.trim()) {
      tempErrors.username = "Username is required";
    }
    if (!formData.mobile.trim() || !mobileRegex.test(formData.mobile)) {
      tempErrors.mobile = "Enter a valid 10-digit mobile number";
    }
    if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("User Data:", formData);

      localStorage.setItem("user", JSON.stringify(formData));

      navigate("/signin");
    }
  };

  return (
    <div className="full-page-container">
      <div className="form-box inner-white">
        <img
          src={amazonLogo}
          alt="Amazon Logo"
          className="amazon-logo-create"
        />

        <h2>Create Account</h2>

        {/* Username */}
        <label className="signup-label" htmlFor="name">
          Your name
        </label>
        <input
          className="signup-input"
          type="text"
          id="name"
          name="username"
          placeholder="First and last name"
          value={formData.username}
          onChange={handleChange}
          required
        />
        {errors.username && <p className="error">{errors.username}</p>}

        {/* Mobile Number */}
        <label className="signup-label" htmlFor="mobile">
          Mobile number
        </label>
        <div className="mobile-input inner-white">
          <select className="signup-select" id="country-code">
            <option value="+91">IN +91</option>
            <option value="+1">US +1</option>
            <option value="+44">UK +44</option>
          </select>
          <input
            className="signup-input"
            type="tel"
            id="mobile"
            name="mobile"
            placeholder="Mobile number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        {errors.mobile && <p className="error">{errors.mobile}</p>}

        {/* Password */}
        <label className="signup-label" htmlFor="password">
          Password
        </label>
        <input
          className="signup-input"
          type="password"
          id="password"
          name="password"
          placeholder="At least 6 characters"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <p className="password-note">
          <i
            className="bi bi-info-circle-fill"
            style={{ color: "#0d6efd" }}
          ></i>
          Passwords must be at least 6 characters.
        </p>

        <p className="info-text">
          To verify your number, we will send you a text message with a
          temporary code. Message and data rates may apply.
        </p>

        {/* Submit Button */}
        <button className="verify-btn" onClick={handleSubmit}>
          Create Account
        </button>

        <div className="work-link inner-white">
          <p>
            Buying for work? <a href="#">Create a free business account</a>
          </p>
        </div>

        <div className="sign-in inner-white">
          <p>
            Already have an account?
            <a
              className="sign-in-link"
              style={{ color: "#007185", cursor: "pointer", marginLeft: "5px" }}
              onClick={() => navigate("/signin")}
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
