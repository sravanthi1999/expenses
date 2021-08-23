import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enterTitle, setEnterTitle] = useState(" "); //1
  const [enterAmount, setEnterAmount] = useState(" ");
  const [enterDate, setEnterDate] = useState(" ");

  // const [userinput, setUserinput] = useState({
  //   enterTitle: "",
  //   enterAmount: "",
  //   enterDate: ""
  // });

  const titleHandle = (event) => {
    console.log(event.target);
    setEnterTitle(event.target.value);

    // setUserinput({
    //   ...userinput,
    //   enterTitle: event.target.value           //this approach will fail to get latest state in some cses
    // });

    // setUserinput((prevState) => {
    //   return { ...prevState, enterTitle: event.target.value };
    // }); //it will guarentee the latest state snapshot
  };

  const amountHandle = (event) => {
    console.log(event.target);
    setEnterAmount(event.target.value);

    // setUserinput({
    //   ...userinput,
    //   enterAmount: event.target.value
    // });

    // setUserinput((prevstate) => {
    //   return { ...prevstate, enterAmount: event.target.value };
    // });
  };

  const dateHandle = (event) => {
    console.log(event.target);
    setEnterDate(event.target.value);

    // setUserinput({
    //   ...userinput,
    //   enterDate: event.target.value
    // });

    // setUserinput((prevstate) => {
    //   return { ...prevstate, enterDate: event.target.value };
    // });
  };

  const submitHandle = (event) => {
    event.preventDefault(); //to prevent reload of page

    const expenseData = {
      title: enterTitle,
      amount: +enterAmount,
      date: new Date(enterDate)
    };
    // console.log(expenseData);
    props.onsaveExpense(expenseData);
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  };

  return (
    <>
      <form onSubmit={submitHandle}>
        <div className="new_expense_controls">
          <div className="new_expense_control">
            <label>Title</label>
            <input type="text" value={enterTitle} onChange={titleHandle} />
            {/*//by adding value attribute we change the values of object empty on submit*/}
          </div>
          <div className="new_expense_control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enterAmount}
              onChange={amountHandle}
            />
          </div>
          <div className="new_expense_control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enterDate}
              onChange={dateHandle}
            />
          </div>
        </div>
        <div className="new_expense_actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          &nbsp;
          <button type="submit">Add Expense </button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
