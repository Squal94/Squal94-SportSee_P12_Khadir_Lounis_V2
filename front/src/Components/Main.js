import React from "react";
import ActivitéQ from "./modulesMain/ActivitéQ";
import DuréeG from "./modulesMain/DuréeG";
import Intensite from "./modulesMain/Intensite";
import KeyDataAffichage from "./modulesMain/KeyDataAffichage";
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
      </div>
      <div className="main__content">
        <div className="main__content__graph">
          <div className="main__content__graph--activite">
            <ActivitéQ />
          </div>
          <div className="main__content__graph--others">
            <div className="main__content__graph--others--margin">
              <DuréeG />
            </div>
            <div className="main__content__graph--others--margin">
              <Intensite />
            </div>
            <div className="main__content__graph--others--margin">
              <Score />
            </div>
          </div>
        </div>
        <div className="main__content__keyData">
          <KeyDataAffichage />
        </div>
      </div>
    </main>
  );
};

export default Main;
