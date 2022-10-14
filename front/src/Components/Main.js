import React from "react";

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
    </main>
  );
};

export default Main;
