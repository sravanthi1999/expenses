// import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  //passing value to parent component

  const handleOption = (event) => {
    props.filterOptions(event.target.value);
  };
  // console.log(year);
  return (
    <div className="expenses_filter">
      <div className="expenses_filter_control">
        <label>Filter by year</label>
        <select value={props.defaultval} onChange={handleOption}>
          <option value="1998">1998</option>
          <option value="1999">1999</option>
          <option value="1962">1962</option>
          <option value="2001">2001</option>
          <option value="2000">2000</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
