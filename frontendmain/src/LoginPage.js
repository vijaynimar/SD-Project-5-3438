import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // For redirecting after successful login
import './LoginPage.css'
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");  // To hold error messages
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
        console.log("data fething")
        const response = await axios.post("https://sd-project-5-3438.onrender.com/login", {
        email,
        password,
      });

      //If login is successful, save the token and navigate to the home page
      // if (response.data.token) {
      //   localStorage.setItem("token", response.data.token);
      //   console.log("data fething")
      //   console.log("token",response.data.token)
      //   navigate("/home");  // Redirect to the home page
      // }
    navigate("/home");  // Redirect to the home page
    //   else{
    //     console.log("data is not there")
        
    // }
    } catch (err) {
      // Handle errors (e.g., incorrect email/password)
      if (err.response) {
        console.log("Login Error:", err.response.data);

        if (err.response.status === 404) {
          alert("User not found! Redirecting to signup...");
          navigate("/signup"); // Redirect to signup page
        } else {
          setError(err.response.data.message || "An error occurred.");
        }
      } else {
        setError("An error occurred.");
      }
      
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      {error && <p className="error-message">{error}</p>}  {/* Show error message */}
    </div>
  );
}

export default LoginPage;
