import React from "react";
import ModuleKeyData from "./ModuleKeyData";

const KeyDataAffichage = (props) => {
  const mockDataKey = props.data?.keyData;
  return (
    <div className="containerKeyData">
      <ModuleKeyData object={mockDataKey?.calorieCount} flag="calorie" />
      <ModuleKeyData object={mockDataKey?.proteinCount} flag="proteine" />
      <ModuleKeyData object={mockDataKey?.carbohydrateCount} flag="glucide" />
      <ModuleKeyData object={mockDataKey?.lipidCount} flag="lipide" />
    </div>
  );
};

export default KeyDataAffichage;
