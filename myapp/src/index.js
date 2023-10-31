import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProductProvider from "./contexts/ProductProvider";
import SidebarProvider from "./contexts/SidebarProvider";
import CartProvider from "./contexts/CartProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <ProductProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </ProductProvider>
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();
