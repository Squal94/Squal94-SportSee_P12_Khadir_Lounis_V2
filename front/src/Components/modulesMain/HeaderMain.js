import React from "react";

const HeaderMain = () => {
  const data = [
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
    <div className="main__title">
      <h1 className="main__title--h1">
        Bonjour{" "}
        <span className="main__title--h1--name">
          {data[0].userInfos.firstName}
        </span>
      </h1>
      <p className="main__title--comment">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
};

export default HeaderMain;
