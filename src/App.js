// import "./styles.css";
// import ExpenseItem from "./Components/ExpenseItem";
// import Card from "./Components/Card";
import { useState } from "react";
// import DataTable from "./Components/DataTable";
import Render from "./Components/Expenses/Render";
import NewExpense from "./Components/NewExpenses/NewExpense";

const data = [
  {
    id: "1",
    title: "Carinsurance",
    amount: 497.84,
    date: new Date(1998, 1, 10)
  },
  {
    id: "2",
    title: "Home Loan",
    amount: 497.84,
    date: new Date(1999, 4, 10)
  },
  {
    id: "3",
    title: "Education",
    amount: 497.84,
    date: new Date(1962, 8, 15)
  },
  { id: "4", title: "Services", amount: 497.84, date: new Date(2001, 9, 3) }
];

export default function App() {
  const [expenses, setExpenses] = useState(data);

  const addExpenseHandler = (expenseObj) => {
    // console.log("in app js");
    console.log(expenseObj);
    setExpenses((prevexp) => {
      return [expenseObj, ...prevexp];
    });

    console.log(expenses);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Render data={expenses} />
      {/* <DataTable /> */}
    </div>
  );
}
