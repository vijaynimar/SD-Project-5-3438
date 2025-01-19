import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";

function SignupPage() {
  const [username, setUsername] = useState("");  // Added username field
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      console.log("Signing up...");
      const response = await axios.post("https://sd-project-5-3438.onrender.com/signin", {
        username,   // Include username in request
        email,
        password,
      });

      setMessage(response.data.message);
      alert("Signup successful! Redirecting to login...");
      navigate("/login"); // Redirect to login page
    } catch (err) {
      console.log("Signup Error:", err.response?.data);
      setMessage(err.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="SignUpBody">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        {message && <p className="message">{message}</p>}
        <p>Already have an account? <button onClick={() => navigate("/login")}>Login</button></p>
      </div>
    </div>
  );
}

export default SignupPage;
