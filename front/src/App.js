import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Pages/Profile";
import D404 from "./Pages/D404";

/**
 * Component App
 * Component App Generates a router that redirects pages according to entries
 */

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/user" element={<Profile />} />
        <Route path="/user/:id" element={<Profile />} />
        {/* <Route path="/user/:id/:extens" element={<Profile />} /> */}
        <Route path="*" element={<D404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
