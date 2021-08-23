import { Card } from "@material-ui/core";
import "./render.css";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import { useState } from "react";
import ExpensesList from "../ExpensesLists/ExpensesList";
import ExpenseChart from "./ExpenseChart";

function Render(prop) {
  const [year, setYear] = useState("1998");

  const filterOption = (paramYr) => {
    setYear(paramYr);
    // console.log(year);
  };

  const filteredData = prop.data.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter defaultval={year} filterOptions={filterOption} />
        {/* {filteredData.length === 0 && <p> No Data Found</p>} */}
        <ExpenseChart expenses={filteredData} />
        <ExpensesList filterdata={filteredData} />
      </Card>
    </div>
  );
}

export default Render;
