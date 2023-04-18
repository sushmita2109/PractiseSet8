import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishListContext";

export const Header = () => {
  const { cartItems } = useCart();
  const { wishLists } = useWishlist();
  return (
    <nav>
      <NavLink to="/">ProductList</NavLink>||
      <NavLink to="/cart">Cart:({cartItems.length})</NavLink>||
      <NavLink to="/wishlist">WishList:({wishLists.length})</NavLink>
    </nav>
  );
};
