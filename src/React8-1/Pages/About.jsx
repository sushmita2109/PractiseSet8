import { useProduct } from "../context/ProductContext";

export const About = () => {
  const { aboutData } = useProduct();
  return (
    <div>
      <h1>About</h1>
      {aboutData.map((item) => (
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
          <p>Description: {item.description}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Category: {item.category}</p>
          <p>Brand: {item.brand}</p>
        </li>
      ))}
    </div>
  );
};
