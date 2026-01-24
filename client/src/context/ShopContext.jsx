import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [searchVal, setSearchVal] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId, size) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      }else{
        cartData[itemId][size]=1;
      }
    }else{
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData)
  };

  useEffect(()=>{
    
  },[cartItems])

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
    cartItems,
    addToCart
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
