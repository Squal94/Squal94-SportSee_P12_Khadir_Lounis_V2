import React from "react";
import {
  RadialBarChart,
  RadialBar,
  //Legend,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

const Score = () => {
  const data = [
    {
      id: 12,
      userInfos: {
        firstName: "Karl",
        lastName: "Dovineau",
        age: 31,
      },
      todayScore: 0.32,
      keyData: {
        calorieCount: 1930,
        proteinCount: 155,
        carbohydrateCount: 290,
        lipidCount: 50,
      },
    },
  ];
  const valuePourcentage = [{ value: data[0].todayScore * 100 }];
  return (
    <ResponsiveContainer width={258} height={263}>
      <RadialBarChart
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
            {`${data[0].todayScore * 100}%`}
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
    </ResponsiveContainer>
  );
};

export default Score;
