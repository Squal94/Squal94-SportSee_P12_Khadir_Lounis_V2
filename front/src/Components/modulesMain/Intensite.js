/* eslint-disable array-callback-return */
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
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
   * is the data transformation function to create arrayTitle with the name of title for  PolarAngleAxis
   */
  function arraykind() {
    arrayTitle = [];
    if (mock?.kind !== undefined) {
      Object.keys(mock.kind).map((i) => arrayTitle.push(mock.kind[i]));
    }
  }

  /**
   * Function IntensiteObject
   * is the data transformation function to create  the input for the graph data
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
    return (
      <RadarChart
        width={258}
        height={263}
        cx="50%"
        cy="50%"
        outerRadius="60%"
        data={IntensiteObject(dataIntensite)}
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
