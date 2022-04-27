import CartContext from "./cart-context";
import { useReducer } from "react";
const initialState = {
  items: [],
  total: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "Add") {
    return {
      items: state.items.concat(action.item),
      total: state.total + action.item.price * action.item.amount,
    };
  }
  return initialState;
};
const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);
  const addItemhandler = (item) => {
    dispatch({ type: "ADD", item: item });
  };
  const removeItemhandler = (id) => {
    dispatch({ type: "MINUS", id: id });
  };

  const cartContext = {
    items: cartState.items,
    total: cartState.total,
    addItem: addItemhandler,
    removeItem: removeItemhandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
