import React, { useContext } from "react";
import { CartContext } from "../contexts/CartProvider";

function Product({ product }) {

    const {addToCart} = useContext(CartContext); 

  const { image, category, price, id } = product;
  return (
    <div className="Product">
      <img className="product-img" src={image} alt="" />
      <p>
        <strong>Category: </strong> {category}
      </p>
      <p>
        <strong>Price:$ </strong> {price}
      </p>
      <button onClick={()=> addToCart(product, id)} className="btn-add">Add to cart</button>
    </div>
  );
}

export default Product;