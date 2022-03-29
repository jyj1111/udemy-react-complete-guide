import "./ExpenseItem.css";
/*
import React,{useState} from 'react';
import ExpenseDate from './ExpenseDate';*/
function ExpenseItem(props) {
  /*
    const [title,setTitle]=useState(props.title);
    const click=()=>{
        setTitle('updated');
        console.log(title);
    }*/

  return (
    <div className="expense-item">
      <div>
        <div>{props.date.toLocaleString("en-US", { month: "long" })}</div>
        <div>{props.date.getFullYear()}</div>
        <div>{props.date.toLocaleString("en-US", { day: "2-digit" })}</div>
      </div>

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
    /*
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={click}>change title</button>
        </div>
        */
  );
}

export default ExpenseItem;
