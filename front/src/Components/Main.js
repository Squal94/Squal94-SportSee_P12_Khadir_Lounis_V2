import React from "react";
import ActivitéQ from "./modulesMain/ActivitéQ";
import DuréeG from "./modulesMain/DuréeG";
import HeaderMain from "./modulesMain/HeaderMain";
import Intensite from "./modulesMain/Intensite";
import KeyDataAffichage from "./modulesMain/KeyDataAffichage";
import Score from "./modulesMain/Score";

const Main = () => {
  return (
    <main className="main">
      <HeaderMain />
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
