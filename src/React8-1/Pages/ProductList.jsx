import { Link } from "react-router-dom";
import { useProduct } from "../context/ProductContext";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishListContext";

export const ProductList = () => {
  const { productData, handleAbout } = useProduct();
  const { handleAddToCart } = useCart();
  const { handleAddToWishlist } = useWishlist();
  return (
    <div>
      <h1>Product List Page</h1>
      {productData.map((item) => (
        <li
          key={item.id}
          style={{
            listStyle: "none",
            border: "1px solid black",
            margin: "0.5rem auto",
            borderRadius: "5px",
          }}
        >
          <p>{item.name}</p>
          <p>{item.description}</p>
          <p>{item.price}</p>
          <Link
            style={{ margin: "0.5rem 0.5rem" }}
            onClick={() => handleAbout(item)}
            to="/about"
          >
            View Details
          </Link>
          <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          <button onClick={() => handleAddToWishlist(item)}>
            Add to Wishlist
          </button>
        </li>
      ))}
    </div>
  );
};
