import { useNavigate } from "react-router-dom";
import "../styles/signin.css";
import amazonLogo from "/assets/AmazonLogo2.png";
import { useState } from "react";

const SignIn = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    mobile: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      formData.mobile === storedUser.mobile &&
      formData.password === storedUser.password
    ) {
      sessionStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } else {
      setError("Invalid mobile number or password. Please try again.");
    }
  };

  return (
    <div className="sign-in-container">
      <div className="sign-in-box inner-white">
        <img
          src={amazonLogo}
          alt="Amazon Logo"
          className="amazon-logo-signin"
        />

        <h2>Sign in</h2>

        <label className="signin-label" htmlFor="mobile">
          Phone number
        </label>
        <input
          className="signin-input"
          type="text"
          id="mobile"
          name="mobile"
          placeholder="Enter your mobile number"
          value={formData.mobile}
          onChange={handleChange}
        />

        <label className="signin-label" htmlFor="password">
          Password
        </label>
        <input
          className="signin-input"
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />
        {error && <p className="error">{error}</p>}

        <button className="continue-btn" onClick={handleSignin}>
          Continue
        </button>

        <p className="terms-text">
          By continuing, you agree to Amazon's <a href="#">Conditions of Use</a>{" "}
          and <a href="#">Privacy Notice</a>.
        </p>

        <div className="help-link inner-white">
          <a href="#">Need help?</a>
        </div>

        <div className="separator inner-white">
          <span>New to Amazon?</span>
        </div>

        <div className="create-account inner-white">
          <button
            className="create-account-btn"
            onClick={() => navigate("/create-account")}
          >
            Create your Amazon account
          </button>
        </div>
        <div className="business-link inner-white">
          <p>
            Buying for work? <a href="#">Shop on Amazon Business</a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
