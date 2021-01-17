import { useEffect, useState } from "react";

// Custom Components
import Product from "./Product";

// Others
import defaultAxios from "utils/axios";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await defaultAxios.get("products");
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
