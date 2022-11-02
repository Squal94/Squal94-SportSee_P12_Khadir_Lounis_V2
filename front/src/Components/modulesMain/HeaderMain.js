import React from "react";

const HeaderMain = (props) => {
  let mock = props.data;
  return (
    <div className="main__title">
      <h1 className="main__title--h1">
        Bonjour{" "}
        <span className="main__title--h1--name">
          {mock?.userInfos.firstName}
        </span>
      </h1>
      <p className="main__title--comment">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
};

export default HeaderMain;
