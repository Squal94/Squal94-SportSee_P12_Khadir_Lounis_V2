import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  //   CartesianGrid,
  //ResponsiveContainer,
  Tooltip,
  // Legend,
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
    <div className="containerDuree">
      <text
        x="20%"
        y="20%"
        fill="#FF7171"
        fontWeight={500}
        fontSize={15}
        textAnchor="start"
        // dominantBaseline="start"
        className="containerDuree__title"
      >
        <tspan>
          Durée moyenne des <br />
          sessions
        </tspan>
      </text>
      <LineChart
        className="containerDuree__graph"
        width={369}
        height={163}
        data={data}
        style={{ backgroundColor: "red" }}
      >
        <XAxis dataKey="day" width={"100%"} visibility={"hidden"} />
        <YAxis visibility={"hidden"} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="white"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
      <div className="containerDuree__week">
        <p>L</p>
        <p>M</p>
        <p>M</p>
        <p>J</p>
        <p>V</p>
        <p>S</p>
        <p>D</p>
      </div>
    </div>
  );
};

export default DuréeG;
