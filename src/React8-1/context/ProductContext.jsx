import { createContext, useContext, useState, useEffect } from "react";
import { fakeFetch } from "../Pages/fakeFetch";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);

  const getData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/products");
      if (res.status === 200) {
        setProductData(res.data.products);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ProductContext.Provider value={{ productData }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
