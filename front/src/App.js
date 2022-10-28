import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Pages/Profile";
import D404 from "./Pages/D404";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/user" element={<Profile />} />
        <Route path="/user/:id" element={<Profile />} />
        <Route path="*" element={<D404 />} />
      </Routes>
      <Profile />
    </BrowserRouter>
  );
};

export default App;

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import About from "./pages/About";
// import D404 from "./pages/D404";
// import Fiche from "./pages/Fiche";
// import Home from "./pages/Home";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/fiche/:appartementId" element={<Fiche />} />
//         {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
//         <Route path="*" element={<D404 />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;
