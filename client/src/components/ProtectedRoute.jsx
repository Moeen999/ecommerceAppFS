import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const ProtectedRoute = ({ element }) => {
  const { token } = useContext(ShopContext);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return element;
};

export default ProtectedRoute;
