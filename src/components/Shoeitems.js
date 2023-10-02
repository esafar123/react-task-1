import React from "react";
import ShoeList from "./ShoeList";

function Shoeitems(props) {
  const shoe = props.product;
  return (
    <div>
      <img src={shoe.img} width="200px" />
      <h3> {shoe.name}</h3>
      <p> {shoe.price}</p>
    </div>
  );
}

export default Shoeitems;
