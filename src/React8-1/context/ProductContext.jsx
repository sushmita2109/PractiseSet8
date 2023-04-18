import { createContext, useContext, useState, useEffect } from "react";
import { fakeFetch } from "../Pages/fakeFetch";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);
  const [aboutData, setAboutData] = useState([]);

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

  const handleAbout = (item) => {
    const filteredData = productData.filter((pro) => pro.id === item.id);
    setAboutData(filteredData);
  };

  return (
    <ProductContext.Provider value={{ productData, handleAbout, aboutData }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
