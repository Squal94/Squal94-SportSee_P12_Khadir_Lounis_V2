/* eslint-disable array-callback-return */
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const Intensite = (props) => {
  let arrayTitle = [];
  let monObjet = props.data?.kind;

  function arraykind() {
    arrayTitle = [];
    if (monObjet === undefined) {
    } else {
      Object.keys(monObjet).map((i) => arrayTitle.push(monObjet[i]));
    }
  }

  function IntensiteObject(object) {
    let graphiqueEntrie = [];
    arraykind();
    let n = 0;
    arrayTitle.map((name) => {
      const objectPush = { value: object?.data.data[n].value, kind: name };
      graphiqueEntrie.push(objectPush);
      n++;
    });
    return graphiqueEntrie;
  }

  if (IntensiteObject(props).length === 0) {
  } else {
    return (
      <RadarChart
        width={258}
        height={263}
        cx="50%"
        cy="50%"
        outerRadius="60%"
        data={IntensiteObject(props)}
        style={{ backgroundColor: "#282D30" }}
        fill="#FFFFFF"
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" tick={{ fontSize: 12 }} />
        <PolarRadiusAxis visibility={"hidden"} />
        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    );
  }
};

export default Intensite;
