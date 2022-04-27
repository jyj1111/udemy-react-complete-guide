import { createContext } from "react";

const CartContext = createContext({
  items: [],
  total: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
