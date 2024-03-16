import React from "react";

const CartContext = React.createContext({
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
  cartIsVisible: false,
  addItem: () => {},
  removeItem: () => {},
  showCart: () => {},
  hideCart: () => {},
});

export default CartContext;
