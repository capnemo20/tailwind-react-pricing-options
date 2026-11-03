import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const resultsData = [
  { id: 1, name: "James", physics: 85, maths: 92, chemistry: 78 },
  { id: 2, name: "Olivia", physics: 76, maths: 88, chemistry: 81 },
  { id: 3, name: "Liam", physics: 91, maths: 95, chemistry: 89 },
  { id: 4, name: "Emily", physics: 68, maths: 74, chemistry: 70 },
  { id: 5, name: "Noah", physics: 82, maths: 79, chemistry: 85 },
  { id: 6, name: "Ava", physics: 90, maths: 86, chemistry: 92 },
  { id: 7, name: "Ethan", physics: 55, maths: 62, chemistry: 58 },
  { id: 8, name: "Mia", physics: 78, maths: 81, chemistry: 84 },
  { id: 9, name: "Lucas", physics: 88, maths: 90, chemistry: 87 },
  { id: 10, name: "Isabella", physics: 73, maths: 77, chemistry: 75 },
];

const ResultsCharts = () => {
  return (
    <div>
      <LineChart width={1000} height={300} data={resultsData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey = "maths"></Line>
        <Line dataKey = {"chemistry"} stroke ="red"></Line>
        <Line dataKey = {"physics"} stroke ="yellow"></Line>
      </LineChart>
    </div>
  );
};

export default ResultsCharts;
