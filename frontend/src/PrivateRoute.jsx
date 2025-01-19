import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");  // Check if user is authenticated

  if (!token) {
    return <Navigate to="/login" replace />;  // Redirect to login if no token
  }

  return children;  // Render the protected component if authenticated
}

export default PrivateRoute;

