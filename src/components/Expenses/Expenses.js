import ExpenseItem from "./ExpenseItem.js";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter.js";
import { useState } from "react";
const Expenses = (props) => {
  const expenses = props.expenses;
  const [year, setYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };
  const filterExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onChangeFilter={filterChangeHandler} />
      {filterExpenses.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
