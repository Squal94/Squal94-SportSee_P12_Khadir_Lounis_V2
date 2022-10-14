import React from "react";
import { BrowserRouter } from "react-router-dom";
import Aside from "../Components/Aside";
import Main from "../Components/Main";
import Nav from "../Components/Nav";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <div className="miseEnPage">
          <Aside />
          <Main />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
