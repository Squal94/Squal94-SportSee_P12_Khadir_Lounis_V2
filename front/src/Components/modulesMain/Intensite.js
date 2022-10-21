import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  //   ResponsiveContainer,
} from "recharts";

const Intensite = () => {
  const source = {
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      {
        value: 200,
        kind: 1,
      },
      {
        value: 240,
        kind: 2,
      },
      {
        value: 80,
        kind: 3,
      },
      {
        value: 80,
        kind: 4,
      },
      {
        value: 220,
        kind: 5,
      },
      {
        value: 110,
        kind: 6,
      },
    ],
  };
  return (
    <RadarChart
      width={250}
      height={263}
      cx="50%"
      cy="50%"
      outerRadius="80%"
      data={source.data}
      dataKind={source.kind}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="dataKind" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="value"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
};

export default Intensite;
