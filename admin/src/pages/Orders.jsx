import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { serverUrl } from "../App";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchOrdersData = async () => {
    if (!token) {
      return null;
    }
    try {
      const res = await axios.post(
        serverUrl + "/api/order/list",
        {},
        { headers: { token } },
      );
      if (res.data.success) {
        setOrders(res.data.orders);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchOrdersData();
  }, [token]);
  return <div>orders</div>;
};

export default Orders;
