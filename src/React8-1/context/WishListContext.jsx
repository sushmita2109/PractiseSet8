import { createContext, useContext, useState } from "react";

export const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [wishLists, setWishLists] = useState([]);
  const handleAddToWishlist = (item) => {
    setWishLists([...wishLists, item]);
  };
  const handleRemoveWishlish = (item) => {
    const filterData = wishLists.filter((wishlist) => wishlist.id !== item.id);
    setWishLists(filterData);
  };
  return (
    <WishListContext.Provider
      value={{ wishLists, handleAddToWishlist, handleRemoveWishlish }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export const useWishlist = () => useContext(WishListContext);
