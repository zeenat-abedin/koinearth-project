/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

// Custom Components
import Product from "./Product";

// Others
import defaultAxios from "utils/axios";

const Products = ({ searchText }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts();
  }, [searchText]);

  const getProducts = async () => {
    try {
      const API_ENDPOINT = searchText
        ? `products?product_name_like=${searchText}`
        : "products";
      const response = await defaultAxios.get(API_ENDPOINT);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-5">
      <div className="row">
        {data.map((item) => (
          <div className="col-md-6" key={item.id}>
            <Product data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
