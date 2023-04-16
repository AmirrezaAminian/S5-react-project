import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";


const NewExpense = (props) => {


  const saveExpenseDataHandler = function(enteredExpenseData){
     const expenseDate = {
      ...enteredExpenseData , 
      id : Math.random() + ''
     }
     props.onAddExpense(expenseDate)
  }
    

    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      </div>
    );
}
export default NewExpense;