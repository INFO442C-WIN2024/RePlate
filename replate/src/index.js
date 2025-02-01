import React from "react";
import ReactDOM from "react-dom/client"; // Use "react-dom/client" for React 18
import "./index.css";
import HomePage from "./Homepage"; // Import your homepage component
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // Create root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
