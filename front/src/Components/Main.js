import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../Services/Data";
import ActivitéQ from "./modulesMain/ActivitéQ";
import DuréeG from "./modulesMain/DuréeG";
import HeaderMain from "./modulesMain/HeaderMain";
import Intensite from "./modulesMain/Intensite";
import KeyDataAffichage from "./modulesMain/KeyDataAffichage";
import Score from "./modulesMain/Score";

/**
 * Component Main
 * Acts as a container for calling other components as well and for their layout
 *
 */

const Main = () => {
  const urlInit = "http://localhost:3000/user/";
  const params = useParams();
  const [userId, setUserId] = useState(18);

  useEffect(() => {
    if (params.id !== undefined) {
      setUserId(params.id);
    }
  }, [params]);

  // if (params.id) {
  //   console.log("je suis la");
  //   valueEntrie = Data(`${urlInit}${userId}`);
  // } else {
  //   valueEntrie = Data(`${urlInit}18`);
  // }
  return (
    <main className="main">
      <HeaderMain data={Data(`${urlInit}${userId}`)} />
      <div className="main__content">
        <div className="main__content__graph">
          <div className="main__content__graph--activite">
            <ActivitéQ data={Data(`${urlInit}${userId}/activity`)} />
          </div>
          <div className="main__content__graph--others">
            <div className="main__content__graph--others--margin">
              <DuréeG data={Data(`${urlInit}${userId}/average-sessions`)} />
            </div>
            <div className="main__content__graph--others--margin">
              <Intensite data={Data(`${urlInit}${userId}/performance`)} />
            </div>
            <div className="main__content__graph--others--margin">
              <Score data={Data(`${urlInit}${userId}`)} />
            </div>
          </div>
        </div>
        <div className="main__content__keyData">
          <KeyDataAffichage data={Data(`${urlInit}${userId}`)} />
        </div>
      </div>
    </main>
  );
};

export default Main;

// function initvalue(value) {
//   const userData = Data(`http://localhost:3000/user/${userId}`);
//   const userActivity = Data(`http://localhost:3000/user/${userId}/activity`);
//   const userAverage = Data(
//     `http://localhost:3000/user/${userId}/average-sessions`
//   );
//   const userPerformance = Data(
//     `http://localhost:3000/user/${userId}/performance`
//   );
// }

// const getId = (params) => {
//   if (Data.USER_MAIN_DATA.find((data) => data.id === params.id)) {
//     // const newAppartement = logements.find(
//     //   (appart) => appart.id === appartementId
//     // );
//     // setAppartement(newAppartement);
//   } else {
//     navigate("/404");
//   }
// };
// getId();
