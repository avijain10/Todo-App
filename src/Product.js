import React from "react";

function Product(props) {
  return (
    <div>
      <h3 style={{ color: "green" }}> ItemName={props.item}</h3>
      <hr />
    </div>
  );
}

export default Product;
