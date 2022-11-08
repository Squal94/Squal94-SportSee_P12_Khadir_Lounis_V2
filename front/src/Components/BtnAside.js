import React, { useEffect, useState } from "react";

/**
 * Component BtnAside
 * @param {picsBtn} picsBtn contain the name of the image to be loaded for it
 * This component allows with the image select to create a button on request
 */

const BtnAside = (picsBtn) => {
  const [icons, setIcons] = useState();

  useEffect(() => {
    setIcons(picsBtn);
  }, [picsBtn]);
  return (
    <div className="aside__menu__btn">
      <img className="aside__menu__btn--img" src={icons?.pics} alt="Bouton" />
    </div>
  );
};

export default BtnAside;
