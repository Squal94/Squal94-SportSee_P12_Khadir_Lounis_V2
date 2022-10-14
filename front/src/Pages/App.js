import React from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "../Components/Nav";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    </div>
  );
};

export default App;
