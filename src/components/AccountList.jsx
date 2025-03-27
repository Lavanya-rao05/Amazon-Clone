import React, { useEffect, useState } from "react";
import "../styles/AccountList.css";
import { useNavigate } from "react-router-dom";

const AccountLists = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");

    if (storedUser && isLoggedIn === "true") {
      setUsername(storedUser.username);
    }
  }, []);

  const handleSignOut = () => {
    sessionStorage.removeItem("isLoggedIn");
    navigate("/signin");
  };

  return (
    <div
      className="account-container"
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <p className="greeting">
        Hello,{" "}
        {username ? (
          <span className="username">{username}</span>
        ) : (
          <span onClick={() => navigate("/signin")}>Sign in</span>
        )}
      </p>

      <p className="account-link">
        <a href="#">Account & Lists</a>
      </p>

      {showDropdown && (
        <div className="dropdown-menu">
          <p className="dropdown-item" onClick={handleSignOut}>
            Sign Out
          </p>
        </div>
      )}
    </div>
  );
};

export default AccountLists;
