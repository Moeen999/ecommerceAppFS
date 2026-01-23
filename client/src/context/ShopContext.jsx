import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [searchVal, setSearchVal] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);

  const currency = "$";
  const delivery_fee = 10;
  const value = {
    currency,
    products,
    delivery_fee,
    searchVal,
    setSearchVal,
    showSearchBar,
    setShowSearchBar,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
