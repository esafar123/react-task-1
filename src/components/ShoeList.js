import React from "react";
import products from "../products";
import Shoeitems from "./Shoeitems";

const ShoeList = () => {
  const productList = products.map((product) => {
    return <Shoeitems product={product} />;
  });
  return productList;
};

export default ShoeList;
