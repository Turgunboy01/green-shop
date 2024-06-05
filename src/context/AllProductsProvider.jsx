import React, { createContext, useEffect, useState } from "react";
import { data } from "../data";

export const ProductsContext = createContext(null);

const AllProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const [modal, setModal] = useState(false);
  const [orderModal, setOrderModal] = useState(false);

  //   console.log(products);

  return (
    <ProductsContext.Provider
      value={{ products, modal, setModal, orderModal, setOrderModal }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default AllProductsProvider;
