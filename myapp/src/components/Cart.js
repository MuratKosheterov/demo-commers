import React from "react";

function Cart({ item, increament, decreament, removeFromCart }) {
  const { image, price, id, amount } = item;
  return (
    <div className="Cart">
      <img className="Cart-image" src={image} alt="" />
      <div className="counter">
        <p onClick={() => decreament(id)}>-</p>
        <p>{amount}</p>
        <p onClick={() => increament(id)}>+</p>
      </div>
      <div className="Cart-details">
        <p>
          <strong>Price: $</strong> {price}
        </p>
        <p>
          <strong>Total price: $</strong> {(price * amount).toFixed(2)}
        </p>
      </div>
      <div onClick={() => removeFromCart(id)}>X</div>
    </div>
  );
}

export default Cart;