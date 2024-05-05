import React, { useState } from "react";
import "../../../css/LoginPopup.css";

interface LoginPopupProps {
  onClose: () => void;
}

// Define the LoginPopup component

const LoginPopup: React.FC<LoginPopupProps> = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle login
  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data.message === "Successful login") {
      alert("Successful login");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="login-popup-overlay">
      <div className="login-popup">
        <h1>Login</h1>
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <form onSubmit={handleLogin}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <div className="button-container">
            <button type="submit" className="submit-button">
              Login
            </button>
            <button type="button" className="submit-button">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
