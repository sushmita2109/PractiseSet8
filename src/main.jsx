import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./React8-1/context/ProductContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
        <App />
      </ProductProvider>
    </Router>
  </React.StrictMode>
);
