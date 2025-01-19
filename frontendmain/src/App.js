// src/App.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Dishes from "./dishes";
import CustomQRScanner from "./scanner";
import SendTextRequest from "./sendrequest";
import About from "./makers";
import SendTextRequestai from "./SendTextRequest";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

function PrivateRoute({ element }) {
  const token = localStorage.getItem("token"); // Check if user is authenticated
  return token ? element : <Navigate to="/login" replace />;
}

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Login Page */}
        <Route path="/login" element={<LoginPage />} />
        {/* Sign up page */}
        <Route path="/signup" element={<SignupPage />} />

        {/* Protected Routes (Only Accessible After Login) */}
        <Route
          path="/home"
          element={
            <PrivateRoute
              element={
                <>
                  <Header />
                  <CustomQRScanner />
                  <SendTextRequest />
                  <SendTextRequestai />
                  <Dishes />
                  <About />
                  <Footer />
                </>
              }
            />
          }
        />

        {/* Default Redirect to Login */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  );
}

export default App;

