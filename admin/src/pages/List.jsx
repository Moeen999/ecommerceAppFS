import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { serverUrl } from "../App";

const List = () => {
  const [products, setProuducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(serverUrl + "/api/product/list");
      setProuducts(res.data.products);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div></div>
    </>
  );
};

export default List;
