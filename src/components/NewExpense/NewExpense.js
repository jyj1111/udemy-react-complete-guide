import NewExpenseForm from "./NewExpenseForm.js";
import "./NewExpense.css";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenses(expenseData);
  };
  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
