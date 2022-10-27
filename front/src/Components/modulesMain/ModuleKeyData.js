import React, { useEffect, useState } from "react";
import caloriPics from "./../../Assets/img/kCal.png";
import glucidePics from "./../../Assets/img/glucide.png";
import lipidePics from "./../../Assets/img/lipides.png";
import proteinePics from "./../../Assets/img/proteines.png";

const ModuleKeyData = (props) => {
  let pics;
  let unit;
  let texte;
  const [keyData, setKeyData] = useState();

  useEffect(() => {
    setKeyData(props);
  }, [props]);

  if (props.flag === "calorie") {
    pics = caloriPics;
    unit = "kCal";
    texte = "Calories";
  } else if (props.flag === "glucide") {
    pics = glucidePics;
    unit = "g";
    texte = "Glucides";
  } else if (props.flag === "lipide") {
    pics = lipidePics;
    unit = "g";
    texte = "Lipides";
  } else if (props.flag === "proteine") {
    pics = proteinePics;
    unit = "g";
    texte = "Proteines";
  }

  return (
    <div className="containerModule">
      <img className="containerModule__flag" src={pics} alt=""></img>
      <div className="containerModule__data">
        <p className="containerModule__data--value">
          {keyData?.object}
          {unit}
        </p>
        <p className="containerModule__data--txt">{texte}</p>
      </div>
    </div>
  );
};

export default ModuleKeyData;
