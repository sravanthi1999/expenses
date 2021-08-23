// import React from "react";
import ChartBar from "../Chart/ChartBar";
import "../Chart/chart.css";

const Chart = (props) => {
  const datapointvalues = props.datapoints.map((datapoint) => datapoint.value);
  const maxValue = Math.max(...datapointvalues);
  return (
    <>
      <div className="chart">
        {props.datapoints.map((datapoint) => (
          <ChartBar
            key={datapoint.id}
            value={datapoint.value}
            maxvalue={maxValue}
            label={datapoint.label}
          />
        ))}
      </div>
    </>
  );
};

export default Chart;
