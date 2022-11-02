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

const DuréeG = (props) => {
  let mock = props.data?.sessions;
  function CustomTooltip({ active, payload }) {
    if (active) {
      return (
        <div className="tooltipDureeG">
          <p>{payload[0].value} min </p>
        </div>
      );
    }
  }

  return (
    <div className="containerDuree">
      <h1 className="containerDuree__title">
        Durée moyenne des <br />
        sessions
      </h1>
      <LineChart
        className="containerDuree__graph"
        width={369}
        height={163}
        data={mock}
        style={{ backgroundColor: "red" }}
      >
        <XAxis dataKey="day" width={"100%"} visibility={"hidden"} />
        <YAxis visibility={"hidden"} />
        <Tooltip
          content={<CustomTooltip />}
          wrapperStyle={{ outline: "none" }}
        />
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
