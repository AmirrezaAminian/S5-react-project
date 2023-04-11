import React , {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpensesDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
  
  const [title , OnChangeTitle] =  useState(props.title)

  const clickHandler = () => {
    OnChangeTitle('Updated')
    console.log(title);

    
  }


  return (
    <Card className="expense-item">
       <ExpenseDate  date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}> Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
