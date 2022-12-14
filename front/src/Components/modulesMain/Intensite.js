/* eslint-disable array-callback-return */
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Text,
} from "recharts";

/**
 * Component Intensite
 * @param {dataIntensite} props props is generated by the Data function and its endpoint in order to retrieve the relevant data   from the api
 * Component Intensite Enables Intensite data to be retrieved and displayed in graphical form(RadarChart), Width Recharts library
 */

const Intensite = (dataIntensite) => {
  /**
   * Mocked Data from backend endPoints : http://localhost:3000/user/${userId}/performance
   * arrayTitle is initialized to receive the final version of the data for the RadarChart
   */
  let arrayTitle = [];
  let mock = dataIntensite.data;

  /**
   * Function arraykind
   * is the data transformation function to create arrayTitle with the name of title for PolarAngleAxis
   * and shows the type of activity carried out in the form of a radar chart.
   */
  function arraykind() {
    arrayTitle = [];
    if (mock?.kind !== undefined) {
      Object.keys(mock.kind).map((i) => arrayTitle.push(mock.kind[i]));
    }
  }

  /**
   * Function IntensiteObject
   * is the data transformation function to create  the input of the radar chart,and shows the type of activity carried out in the form .
   */
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

  if (IntensiteObject(dataIntensite).length !== 0) {
    function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
      return (
        <Text
          {...rest}
          verticalAnchor="middle"
          alignmentBaseline="right"
          y={y + (y - cy) / 16}
          x={x + (x - cx) / 16}
          fontSize="12px"
        >
          {payload.value}
        </Text>
      );
    }
    return (
      <RadarChart
        width={258}
        height={263}
        cx="48%"
        cy="50%"
        outerRadius="60%"
        data={IntensiteObject(dataIntensite)}
        style={{ backgroundColor: "#282D30" }}
        fill="#FFFFFF"
      >
        <PolarGrid />
        <PolarAngleAxis
          dataKey="kind"
          tick={(props) => renderPolarAngleAxis(props)}
        />
        <PolarRadiusAxis visibility={"hidden"} />
        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    );
  }
};

export default Intensite;
