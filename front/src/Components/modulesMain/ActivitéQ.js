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

/**
 * Component ActivitéQ
 * @param {activiteData} activiteData  is generated by the Data function and its endpoint in order to retrieve the relevant data  from the api
 * ActivitéQ shows daily activity in the form of a BarChart. The BarChart shows information about weight and calories   burned. The x-axis corresponds to the days of the current month. A tooltip appears when hovering.
 */

const ActivitéQ = (activiteData) => {
  /**
   * Mocked Data from backend endPoints : http://localhost:3000/user/${userId}/activity
   */
  let mock = activiteData.data?.sessions;

  /** Function CustomTooltip
   * function for shaping the Tooltip
   */
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
    <div className="barChartContainer">
      <h1 className="barChartContainer__title">Activité quotidienne</h1>
      <BarChart
        width={835}
        height={220}
        data={mock}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        style={{ backgroundColor: "#FBFBFB" }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          horizontal={true}
          vertical={false}
        />
        <XAxis dataKey={"day".charAt(5)} dy={15} axisLine={false} />
        <YAxis orientation="right" dx={15} axisLine={false} />
        <Tooltip
          content={<CustomTooltip />}
          itemStyle={{ color: "white" }}
          contentStyle={{ backgroundColor: "red" }}
          wrapperStyle={{ outline: "none" }}
        />
        <Legend
          // content={renderLegend}
          layout="horizontal"
          lengthAdjust={30}
          wrapperStyle={{
            top: -90,
            right: -200,
          }}
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
    </div>
  );
};

export default ActivitéQ;

// const renderLegend = (props) => {
//   const { payload } = props;

//   return (
//     <ul className="legendContainer">
//       {payload.map((entry, index) => (
//         <li className="legendContainer__form" key={`item-${index}`}>
//           {entry.value}
//         </li>
//       ))}
//     </ul>
//   );
// };
