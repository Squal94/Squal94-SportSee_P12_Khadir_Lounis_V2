import React, { useEffect, useState } from "react";

/**
 * Component BtnAside
 * @param {props} props contain the name of the image to be loaded for it
 * This component allows with the image select to create a button on request
 */

const BtnAside = (props) => {
  const [icons, setIcons] = useState();

  useEffect(() => {
    setIcons(props);
  }, [props]);
  return (
    <div className="aside__menu__btn">
      <img className="aside__menu__btn--img" src={icons?.pics} alt="Bouton" />
    </div>
  );
};

export default BtnAside;
