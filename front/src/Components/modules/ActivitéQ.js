import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const ActivitéQ = () => {
  const data = [
    {
      day: "2020-07-01",
      kilogram: 70,
      calories: 240,
    },
    {
      day: "2020-07-02",
      kilogram: 69,
      calories: 220,
    },
    {
      day: "2020-07-03",
      kilogram: 70,
      calories: 280,
    },
    {
      day: "2020-07-04",
      kilogram: 70,
      calories: 500,
    },
    {
      day: "2020-07-05",
      kilogram: 69,
      calories: 160,
    },
    {
      day: "2020-07-06",
      kilogram: 69,
      calories: 162,
    },
    {
      day: "2020-07-07",
      kilogram: 69,
      calories: 390,
    },
  ];

  return (
    <BarChart
      width={835}
      height={320}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <text
        x={132}
        y={24}
        fill="black"
        textAnchor="middle"
        dominantBaseline="central"
      >
        <tspan fontSize="15" fontWeight={600}>
          Activité quotidienne
        </tspan>
      </text>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis orientation="right" />
      <Tooltip
        labelStyle={{ color: "green" }}
        itemStyle={{ color: "cyan" }}
        wrapperStyle={{ backgroundColor: "red" }}
      />
      <Legend />
      <Bar
        dataKey="kilogram"
        fill="#282D30"
        barSize={7}
        name="Poids (Kg)"
        radius={[10, 10, 0, 0]}
      />
      <Bar
        dataKey="calories"
        fill="#E60000"
        barSize={7}
        name="Calories brulées (kCal)"
        radius={[10, 10, 0, 0]}
      />
    </BarChart>
  );
};

export default ActivitéQ;
