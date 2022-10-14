import React from "react";
import zen from "./../Assets/img/zen.png";
import nage from "./../Assets/img/nage.png";
import velo from "./../Assets/img/velo.png";
import poid from "./../Assets/img/poids.png";
import copyright from "./../Assets/img/copyright.png";
import BtnAside from "./BtnAside";

const Aside = () => {
  const btn_aside = [zen, nage, velo, poid];
  let n = 0;

  return (
    <div className="aside">
      <div className="aside__menu"></div>
      {btn_aside.map((value) => (
        <BtnAside pics={value} key={n++} />
      ))}
      <div>
        <img
          className="aside__copyright"
          src={copyright}
          alt="Copyright année 2020"
        />
      </div>
    </div>
  );
};

export default Aside;
