import "./NewExpenseForm.css";
import { useState } from "react";
const NewExpenseForm = (props) => {
  const [state, setState] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const titleChangeHandler = (e) => {
    /*setState({
      ...state,
      title: e.target.value,
    });*/
    setState((prevstate) => {
      return { ...prevstate, title: e.target.value };
    });
  };
  const amountChangeHandler = (e) => {
    setState((prevstate) => {
      return { ...prevstate, amount: e.target.value };
    });
  };

  const dateChangeHandler = (e) => {
    setState((prevstate) => {
      return { ...prevstate, date: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: state.title,
      amount: state.amount,
      date: new Date(state.date),
    };
    props.onSaveExpenseData(expenseData);
    setState({
      ...state,
      title: "",
      amount: "",
      date: "",
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={state.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={state.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={state.date}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default NewExpenseForm;
