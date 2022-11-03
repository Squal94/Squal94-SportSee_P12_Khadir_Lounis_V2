/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const Intensite = (props) => {
  const [mockData, setMockData] = useState();
  useEffect(() => {
    setMockData(props);
  }, [props]);
  let arrayTitle = [];

  function arraykind(object) {
    arrayTitle = [];
    let monObjet = object?.data?.kind;
    Object.keys(monObjet || {}).map((i) => arrayTitle.push(monObjet[i]));
  }

  // const source = {
  //   kind: {
  //     1: "cardio",
  //     2: "energy",
  //     3: "endurance",
  //     4: "strength",
  //     5: "speed",
  //     6: "intensity",
  //   },
  //   data: [
  //     {
  //       value: 200,
  //       kind: 1,
  //     },
  //     {
  //       value: 240,
  //       kind: 2,
  //     },
  //     {
  //       value: 80,
  //       kind: 3,
  //     },
  //     {
  //       value: 80,
  //       kind: 4,
  //     },
  //     {
  //       value: 220,
  //       kind: 5,
  //     },
  //     {
  //       value: 110,
  //       kind: 6,
  //     },
  //   ],
  // };

  let graphiqueEntrie = [];

  // function intensiteArray(object) {
  //   let test = object?.kind;
  //   arrayTitle = [];
  //   for (const [key, value] of Object.entries(test?.kind)) {
  //     arrayTitle.push(value);
  //   }
  //   console.log(arrayTitle);
  // }

  //intensiteArray(mock);
  function IntensiteObject(object) {
    arraykind(object);
    let n = 0;
    graphiqueEntrie = [];
    arrayTitle.map((name) => {
      const objectPush = { value: object.data.data[n].value, kind: name };
      graphiqueEntrie.push(objectPush);
      n++;
    });
  }

  IntensiteObject(mockData);
  console.log(graphiqueEntrie);
  // IntensiteObject(mock);

  return (
    <RadarChart
      width={258}
      height={263}
      cx="50%"
      cy="50%"
      outerRadius="60%"
      data={graphiqueEntrie}
      style={{ backgroundColor: "#282D30" }}
      fill="#FFFFFF"
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" tick={{ fontSize: 12 }} />
      <PolarRadiusAxis visibility={"hidden"} />
      <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
    </RadarChart>
  );
};

export default Intensite;
