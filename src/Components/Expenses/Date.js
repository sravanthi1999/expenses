import "./date.css";

function Date(props) {
  const month = props.date.toLocaleString("en-in", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-in", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date-month"> {month}</div>
      <div className="expense-date-year"> {year} </div>
      <div className="expense-date-day">{day} </div>
    </div>
  );
}

export default Date;
