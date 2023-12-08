import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const updateCart = (item) => {
    const existingItem = cart.find((c) => c.id === item.id);

    if (existingItem) {
      // If the item already exists in the cart, update its quantity
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  };

  const cleanCart = (item) => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, updateCart, cleanCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider, CartContext };
