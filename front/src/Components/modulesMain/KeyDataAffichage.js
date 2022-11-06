import React from "react";
import ModuleKeyData from "./ModuleKeyData";

/**
 * Component KeyDataAffichage
 * @param {dataKey} props props is generated by the Data function and its endpoint in order to retrieve the relevant data   from the api
 * KeyDataAffichage is the container to display the desired data for the ModuleKeyData component .
 */

const KeyDataAffichage = (dataKey) => {
  /**
   * Mocked Data from backend endPoints : http://localhost:3000/user/${userId}
   */
  const mockDataKey = dataKey.data?.keyData;
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
