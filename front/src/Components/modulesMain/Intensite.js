/* eslint-disable array-callback-return */
import React, { useState } from "react";
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
  const [newObject, setNewObject] = useState({});
  let arrayTitle;
  let graphiqueEntrie = [];

  function intensiteArray(object) {
    arrayTitle = [];
    // let fonctNewOject = "";
    // object.kind(subjects).map((value) => console.log(value));
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

// function intensiteObject(object) {
//   let t = [];
//   let n = 0;
//   // let fonctNewOject = "";
//   // object.kind(subjects).map((value) => console.log(value));
//   for (const [key, value] of Object.entries(object.kind)) {
//     t.push(value);
//   }
//   setNewObject(
//     t.map((test) => {
//       n = n++;
//       const kn = new Map([[test, object.data[n].value]]);
//       console.log(kn);
//     })
//   );
// }
// intensiteObject(source);

//  function IntensiteObject(object) {
//     intensiteArray(object);
//     let n = 0;
//     let kn = {};
//     t.map((test) => {
//       n = n++;
//       let key = test
//       kn = new Set();
//       kn.add({ `${key} : object.data[n].value` });
//     });
//     console.log(kn);
//   }

// function IntensiteObject(object) {
//   intensiteArray(object);
//   let n = 0;
//   let kn = {};
//   t.map((test) => {
//     n = n++;
//     let newEntrie = new Object(  value : object.data[n].value);

//     const returnedTarget = Object.assign(target, source);
//   });
//   console.log(kn);
// }
// IntensiteObject(source);

// function IntensiteObject(object) {
//   intensiteArray(object);
//   let n = 0;
//   graphiqueEntrie = [];
//   t.map(() => {
//     n = n++;
//     const objectPush = { value: object.data[n].value, kind: test };
//     graphiqueEntrie.push(objectPush);
//   });
// }
// IntensiteObject(source);
// console.log(graphiqueEntrie);
