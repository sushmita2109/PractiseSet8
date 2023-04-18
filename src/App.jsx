import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ProductList } from "./React8-1/Pages/ProductList";
import { Cart } from "./React8-1/Pages/Cart";
import { WishList } from "./React8-1/Pages/WishList";
import { Header } from "./React8-1/Pages/Header";
import { About } from "./React8-1/Pages/About";
import { Error404 } from "./React8-1/Pages/Error404";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
