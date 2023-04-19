import { useWishlist } from "../context/WishListContext";

export const WishList = () => {
  const { wishLists, handleRemoveWishlish } = useWishlist();
  return (
    <div>
      <h1>WishList</h1>
      <h3>Items:{wishLists.length}</h3>
      {wishLists.map((item) => (
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
          <p>Quantity: {item.quantity}</p>
          <p>Category: {item.category}</p>
          <p>Brand: {item.brand}</p>
          <button onClick={() => handleRemoveWishlish(item)}>
            Remove from the cart
          </button>
        </li>
      ))}
    </div>
  );
};
