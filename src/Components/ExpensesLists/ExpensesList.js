import React from "react";
import ExpenseItem from "../Expenses/ExpenseItem";
import "./expensesList.css";

const ExpensesList = (props) => {
  // let content = <p> No Data Found</p>; //we can use varibales to hold jsx tags
  if (props.filterdata.length === 0) {
    return <h2 className="expenses_list_fallback"> no items found</h2>;
  }

  return (
    <ul className="expenses_list">
      {props.filterdata.map((para) => {
        return (
          <ExpenseItem
            key={para.id} /* resolves issue of misplaced items */
            title={para.title}
            amount={para.amount}
            date={para.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
