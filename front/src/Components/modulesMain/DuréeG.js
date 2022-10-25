import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  //   CartesianGrid,
  //   ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const DuréeG = () => {
  const data = [
    {
      day: 1,
      sessionLength: 30,
    },
    {
      day: 2,
      sessionLength: 23,
    },
    {
      day: 3,
      sessionLength: 45,
    },
    {
      day: 4,
      sessionLength: 50,
    },
    {
      day: 5,
      sessionLength: 0,
    },
    {
      day: 6,
      sessionLength: 0,
    },
    {
      day: 7,
      sessionLength: 60,
    },
  ];
  return (
    <LineChart
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      width={358}
      height={263}
      data={data}
      style={{ backgroundColor: "red" }}
      //   wrapperStyle={{ backgroundColor: "red" }}
      //   fill="#E60000"
    >
      <XAxis dataKey="day" width={"100%"} stroke="hidden" />
      <YAxis visibility={"hidden"} />
      <Tooltip />
      <Legend />
      {/* <Line
        type="monotone"
        dataKey="day"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="sessionLength" stroke="#82ca9d" /> */}
      <Line
        type="monotone"
        dataKey="sessionLength"
        stroke="white"
        strokeWidth={2}
      />
    </LineChart>
  );
};

export default DuréeG;
