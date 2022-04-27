import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";
const MealItemForm = (props) => {
  const [amountValid, SetAmountValid] = useState(true);
  const inputref = useRef();
  const submithandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputref.current.value;
    const num = +enteredAmount;
    if (enteredAmount.trim().length === 0 || num < 1 || num > 5) {
      SetAmountValid(false);
      return;
    }
    props.onAddToCart(num);
  };
  return (
    <form className={classes.form} onSubmit={submithandler}>
      <Input
        ref={inputref}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!amountValid && <p>please enter a valid amount(1-5)</p>}
    </form>
  );
};

export default MealItemForm;
