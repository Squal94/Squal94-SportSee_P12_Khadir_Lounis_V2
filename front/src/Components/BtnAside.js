import React, { useEffect, useState } from "react";

const BtnAside = (props) => {
  const [icons, setIcons] = useState();

  useEffect(() => {
    setIcons(props);
  }, [props]);
  console.log(icons);
  return (
    <div className="aside__menu__btn">
      <img className="aside__menu__btn--img" src={icons?.pics} alt="Bouton" />
    </div>
  );
};

export default BtnAside;
