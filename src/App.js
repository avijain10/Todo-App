import React from "react";
import Product from "./Product";
import productsData from "./productsData";

function App() {
  const productComponents = productsData.map((product) => (
    <Product key={Product.id} item={product.item} />
  ));

  return <div>{productComponents}</div>;
}
export default App;
