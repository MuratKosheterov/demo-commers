import React, { useContext } from "react";
import { CartContext } from "../contexts/CartProvider";
import { SidebarContext } from "../contexts/SidebarProvider";

function Navbar() {
  const { openClose } = useContext(SidebarContext);
  const { cart } = useContext(CartContext);
  return (
    <div className="Navbar">
      <div className="Logo">
        E-<span>commerse</span>
      </div>
      <button onClick={() => openClose()} className="shop">
        <span>
          Shop
          <sup>{cart.length}</sup>
        </span>
      </button>
    </div>
  );
}

export default Navbar;
