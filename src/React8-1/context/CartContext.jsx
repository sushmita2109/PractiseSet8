import { createContext, useContext, useState } from "react";
import { useProduct } from "./ProductContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const { productData } = useProduct();

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const handleRemove = (item) => {
    const filteredData = cartItems.filter((cart) => cart.id !== item.id);
    setCartItems(filteredData);
  };

  return (
    <CartContext.Provider value={{ handleAddToCart, cartItems, handleRemove }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
