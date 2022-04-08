import NewExpenseForm from "./NewExpenseForm.js";
import { useState } from "react";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [edit, setEdit] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenses(expenseData);
    setEdit(false);
  };
  const startEditingHandler = () => {
    setEdit(true);
  };
  const stopEditingHandler = () => {
    setEdit(false);
  };
  return (
    <div className="new-expense">
      {!edit && <button onClick={startEditingHandler}>Add New Expense</button>}
      {edit && (
        <NewExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
