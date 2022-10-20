import React from "react";
import { BrowserRouter } from "react-router-dom";
import Aside from "../Components/Aside";
import Data from "../Components/Data";
import Main from "../Components/Main";
import Nav from "../Components/Nav";

const App = () => {
  return (
    <BrowserRouter>
      <Data id={"18"} extens={"performance"} />
      <Nav />
      <div className="miseEnPage">
        <Aside />
        <Main />
      </div>
    </BrowserRouter>
  );
};

export default App;
