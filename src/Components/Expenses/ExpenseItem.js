import { useState } from "react";
import Card from "../UI/Card";
import Date from "./Date";
import "./expenseItem.css";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const update = () => {
    setTitle("updated");
  };

  return (
    <li>
      <Card className="expense_item">
        <Date date={props.date} />
        <div className="expense_item_description">
          <h2>{title} </h2>
          <Card className="expense_item_price"> ${props.amount} </Card>
        </div>
        <button onClick={update}> click </button>
      </Card>
    </li>
  );
}

export default ExpenseItem;
