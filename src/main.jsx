import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./React8-1/context/ProductContext";
import { CartProvider } from "./React8-1/context/CartContext";
import { WishListProvider } from "./React8-1/context/WishListContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
        <CartProvider>
          <WishListProvider>
            <App />
          </WishListProvider>
        </CartProvider>
      </ProductProvider>
    </Router>
  </React.StrictMode>
);
