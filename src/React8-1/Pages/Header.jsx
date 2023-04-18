import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav>
      <NavLink to="/">ProductList</NavLink>||
      <NavLink to="/cart">Cart</NavLink>||
      <NavLink to="/wishlist">WishList</NavLink>
    </nav>
  );
};
