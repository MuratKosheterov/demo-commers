import React, { useContext } from "react";
import Product from "../components/Product";
import { ProductContext } from "../contexts/ProductProvider";

function Home() {
  const { products } = useContext(ProductContext);

  return (
    <div className="Home">
      {products.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
}

export default Home;