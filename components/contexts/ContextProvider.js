import React from "react";
import { UserContextProvider } from "./UserContext";
import { CartContextProvider } from "./CartContext";

const ContextProvider = ({ children }) => {
  return (
    <>
      <UserContextProvider>
        <CartContextProvider>{children}</CartContextProvider>
      </UserContextProvider>
    </>
  );
};

export default ContextProvider;
