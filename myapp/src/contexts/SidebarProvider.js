import React, { createContext, useState } from "react";

export const SidebarContext = createContext();

function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function openClose() {
    setIsOpen(!isOpen);
  }

  return (
    <SidebarContext.Provider value={{ openClose, isOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

export default SidebarProvider;
