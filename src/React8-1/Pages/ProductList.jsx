import { Link } from "react-router-dom";
import { useProduct } from "../context/ProductContext";

export const ProductList = () => {
  const { productData } = useProduct();
  return (
    <div>
      <h1>Product List Page</h1>
      {productData.map((item) => (
        <li key={item.id}>
          <p>{item.name}</p>
          <p>{item.description}</p>
          <p>{item.price}</p>
          <Link to="/about">View Details</Link>
        </li>
      ))}
    </div>
  );
};
