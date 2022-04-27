import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
const Cart = (props) => {
  const cartctx = useContext(CartContext);
  const totalAmount = `$${cartctx.total.toFixed(2)}`;
  const cartItemAddhandler = (item) => {};
  const cartItemRemovehandler = (id) => {};
  const cartitems = (
    <ul className={classes["cart-items"]}>
      {cartctx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemovehandler.bind(null, item.id)}
            onAdd={cartItemAddhandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
