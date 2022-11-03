import React from "react";
import {
  RadialBarChart,
  RadialBar,
  //Legend,
  //ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

const Score = (props) => {
  let valuePourcentage;
  let result;
  const mock = props?.data;

  if (props.data === undefined) {
  } else {
    if (mock?.todayScore) {
      valuePourcentage = [{ value: mock?.todayScore * 100 }];
      result = mock?.todayScore * 100;
    } else {
      valuePourcentage = [{ value: mock?.score * 100 }];
      result = mock?.score * 100;
    }

    return (
      <RadialBarChart
        width={258}
        height={263}
        innerRadius="70%"
        outerRadius="80%"
        startAngle={170}
        endAngle={360 + 170}
        barSize={12}
        data={valuePourcentage}
        style={{ backgroundColor: "#FBFBFB" }}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          cornerRadius={30 / 2}
          dataKey="value"
          fill="#FF0000"
          // background={{ fill: "#295049" }}
        />
        <text
          x="50%"
          y="45%"
          fill="#282D30"
          textAnchor="middle"
          dominantBaseline="central"
        >
          <tspan fontSize="26" fontWeight={700}>
            {result}%
          </tspan>
        </text>
        <text
          x="50%"
          y="55%"
          fill="#74798C"
          textAnchor="middle"
          dominantBaseline="central"
        >
          <tspan fontSize="16" fontWeight={500}>
            de votre objectif
          </tspan>
        </text>
        <text
          x="15%"
          y="15%"
          fill="#282D30"
          textAnchor="middle"
          dominantBaseline="central"
        >
          <tspan fontSize="15" fontWeight={500}>
            Score
          </tspan>
        </text>
      </RadialBarChart>
    );
  }
};

export default Score;
