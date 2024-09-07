import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Layout/Header.js"; // Assuming this is your Navbar
import Footer from "../components/Layout/Footer.js"; // Assuming this is your Footer
import "./HomePage.css"; // Include styles here

const HomePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // For navigation

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save the JWT token in localStorage
        localStorage.setItem("token", data.token);

        // Redirect to some protected page (e.g., dashboard)
        navigate("/dashboard");
      } else {
        setError(data.message); // Show error message
      }
    } catch (error) {
      setError("An error occurred during login. Please try again.");
    }
  };

  return (
    <>
      <Header /> {/* Navbar */}
      <div className="main-container">
        {/* Left Section (Image & Text) */}
        <div className="left-section">
          <div className="text-container">
            <img
              src="../images/CompLogo1.png" // Ensure this is the correct path
              alt="Ques.AI Logo"
              className="logo"
            />
            <h1>Your podcast will no longer be just a hobby.</h1>
            <p>Supercharge Your Distribution using our AI assistant!</p>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="right-section">
          <div className="form-container">
            <img
              src="../images/Group22(1).png" // Ensure this is the correct path
              className="form-logo"
            />
            <h1>Welcome to Ques.AI</h1>
            <form>
              <input
                type="email"
                placeholder="Email Address"
                className="input-field"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="input-field"
                required
              />
              <div className="form-options">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
                <a href="#" className="forgot-password">
                  Forgot password?
                </a>
              </div>
              <button type="submit" className="login-button">
                Login
              </button>
              <div className="divider">
                <span>or</span>
              </div>
              <button className="google-login">
                <img src="../images/image6.png" />
                Continue with Google
              </button>
              <div className="create-account">
                <p>
                  Don’t have an account? <a href="#">Create Account</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
