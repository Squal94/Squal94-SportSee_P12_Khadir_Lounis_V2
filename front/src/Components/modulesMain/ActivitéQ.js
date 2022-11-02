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

const ActivitéQ = (props) => {
  let mock = props.data?.sessions;
  function CustomTooltip({ active, payload }) {
    if (active) {
      return (
        <div className="tooltipActivite">
          <p>{payload[0].value}kg </p>
          <p>{payload[1].value}Kcal </p>
        </div>
      );
    }
  }

  return (
    <BarChart
      width={835}
      height={320}
      data={mock}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      style={{ backgroundColor: "#FBFBFB" }}
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
        content={<CustomTooltip />}
        itemStyle={{ color: "white" }}
        contentStyle={{ backgroundColor: "red" }}
        wrapperStyle={{ outline: "none" }}
      />
      <Legend
        layout="horizontal"
        wrapperStyle={{ top: 15, right: -100 }}
        iconType="circle"
        iconSize={8}
      />
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
