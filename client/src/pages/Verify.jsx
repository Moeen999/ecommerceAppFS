import { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Verify = () => {
  const { navigate, token, setCartItems, serverURL } = useContext(ShopContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const verifyStripe = async () => {
    try {
      if (!token) {
        return null;
      }
      const res = await axios.post(
        serverURL + "/api/order/verifyStripe",
        { success, orderId },
        { headers: { token } },
      );
      if (res.data.success) {
        setCartItems({});
        navigate("/orders");
      } else {
        navigate("/cart");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    verifyStripe();
  }, [token]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-2xl font-bold">Verifying Payment...</div>
    </div>
  );
};

export default Verify;
