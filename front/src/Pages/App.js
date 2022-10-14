import React from "react";
import { BrowserRouter } from "react-router-dom";
import Aside from "../Components/Aside";
import Nav from "../Components/Nav";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Aside />
      </BrowserRouter>
    </div>
  );
};

export default App;
