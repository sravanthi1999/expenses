import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [form, setForm] = useState(false);

  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString() /* important to resolve misplaced items */
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    setForm(false);
  };

  const formHandler = () => {
    setForm(true);
  };

  const stopFormHandler = () => {
    setForm(false);
  };

  return (
    <div className="new_expense">
      {!form && <button onClick={formHandler}> Add new Expense </button>}
      {form && (
        <ExpenseForm
          onsaveExpense={saveExpenseHandler}
          onCancel={stopFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
