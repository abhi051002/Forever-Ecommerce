import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { useLocation } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setSearchVisible(true);
    } else {
      setSearchVisible(false);
    }
  }, [location]);
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    setShowSearch,
    showSearch,
    searchVisible,
    // Add more context values as needed...
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
