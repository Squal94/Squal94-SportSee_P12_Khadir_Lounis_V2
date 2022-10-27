import React from "react";
import ModuleKeyData from "./ModuleKeyData";

const KeyDataAffichage = () => {
  const dataKey = [
    {
      id: 12,
      userInfos: {
        firstName: "Karl",
        lastName: "Dovineau",
        age: 31,
      },
      todayScore: 0.12,
      keyData: {
        calorieCount: 1930,
        proteinCount: 155,
        carbohydrateCount: 290,
        lipidCount: 50,
      },
    },
  ];
  return (
    <div className="containerKeyData">
      <ModuleKeyData object={dataKey[0].keyData.calorieCount} flag="calorie" />
      <ModuleKeyData object={dataKey[0].keyData.proteinCount} flag="proteine" />
      <ModuleKeyData
        object={dataKey[0].keyData.carbohydrateCount}
        flag="glucide"
      />
      <ModuleKeyData object={dataKey[0].keyData.lipidCount} flag="lipide" />
    </div>
  );
};

export default KeyDataAffichage;
