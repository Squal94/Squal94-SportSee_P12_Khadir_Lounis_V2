import React from "react";
import Aside from "../Components/Aside";
import Nav from "../Components/Nav";

const D404 = () => {
  return (
    <div>
      <Nav />
      <div className="miseEnPage">
        <Aside />
        <div className="container404">
          <h1 className="container404__title">404</h1>
          <p className="container404__txt">cette page n'existe pas</p>
        </div>
      </div>
    </div>
  );
};

export default D404;
