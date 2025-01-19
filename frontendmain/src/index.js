// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import { BrowserRouter } from "react-router-dom";  // BrowserRouter wraps your app
import App from './App';  // Your app component
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap your app with BrowserRouter here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

