/* eslint-disable array-callback-return */
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  // ResponsiveContainer,
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
  //const [newObject, setNewObject] = useState({});
  let arrayTitle;
  let graphiqueEntrie = [];

  function intensiteArray(object) {
    arrayTitle = [];
    // let fonctNewOject = "";
    // object.kind(subjects).map((value) => console.log(value));
    // eslint-disable-next-line no-unused-vars
    for (const [key, value] of Object.entries(object.kind)) {
      arrayTitle.push(value);
    }
  }

  function IntensiteObject(object) {
    intensiteArray(object);
    let n = 0;
    graphiqueEntrie = [];
    arrayTitle.map((name) => {
      const objectPush = { value: object.data[n].value, kind: name };
      graphiqueEntrie.push(objectPush);
      n++;
    });
  }
  IntensiteObject(source);

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
