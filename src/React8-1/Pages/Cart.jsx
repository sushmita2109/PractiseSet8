import { useCart } from "../context/CartContext";

export const Cart = () => {
  const { cartItems, handleRemove } = useCart();

  // console.log(cartItems);
  return (
    <div>
      <h1>Cart</h1>
      <h4>Items:{cartItems.length}</h4>
      {cartItems.map((item) => (
        <li
          key={item.id}
          style={{
            listStyle: "none",
            border: "1px solid black",
            margin: "0.5rem auto",
            borderRadius: "5px",
          }}
        >
          <p>Name: {item.name}</p>
          <p>Description: {item.description}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Category: {item.category}</p>
          <p>Brand: {item.brand}</p>
          <button onClick={() => handleRemove(item)}>
            Remove from the cart
          </button>
        </li>
      ))}
    </div>
  );
};
