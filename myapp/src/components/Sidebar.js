import React, { useContext } from "react";
import { CartContext } from "../contexts/CartProvider";
import { SidebarContext } from "../contexts/SidebarProvider";
import Cart from "./Cart";

function Sidebar() {
  const { isOpen, openClose } = useContext(SidebarContext);
  const { cart, resetCart, increament, decreament, removeFromCart, total } =  useContext(CartContext);

  return (
    <div className={isOpen ? "sidebar" : "sidebar-close"}>
      <div className="sidebar-top">
        <div className="s">Sidebar</div>
        <div
          onClick={() => openClose()}
          className={isOpen ? "Close" : "sidebar-close"}
        >
          Close
        </div>
      </div>
      <div className="sidebar-center">
        {cart.map((item) => {
          return (
            <Cart
              item={item}
              increament={increament}
              decreament={decreament}
              removeFromCart={removeFromCart}
              key={item.id}
            />
          );
        })}
      </div>
      <div className="sidebar-footer">
        <div>
          <strong>Total:</strong> {(total).toFixed(2)}
        </div>
        <div>
          <button onClick={() => resetCart()} className="sidebar-reset">
            <strong>Reset</strong>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
