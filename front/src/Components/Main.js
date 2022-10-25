import React from "react";
import ActivitéQ from "./modulesMain/ActivitéQ";
import DuréeG from "./modulesMain/DuréeG";
import Intensite from "./modulesMain/Intensite";
import Score from "./modulesMain/Score";

const Main = () => {
  return (
    <main className="main">
      <div className="main__title">
        <h1 className="main__title--h1">
          Bonjour <span className="main__title--h1--name">Thomas</span>
        </h1>
        <p className="main__title--comment">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
        <ActivitéQ />
        <DuréeG />
        <Intensite />
        <Score />
      </div>
    </main>
  );
};

export default Main;
