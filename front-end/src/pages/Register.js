// src/pages/Register.js
import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    try {
      const response = await fetch("/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      console.log(data);

      if (data.success) {
        alert("Registration successful!");
      } else {
        alert("Registration failed: " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during registration.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    registerUser(); // Call the registration function
  };

  return (
    <div className="register-page">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
