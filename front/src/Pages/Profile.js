import React from "react";
import { useParams } from "react-router-dom";
import Aside from "../Components/Aside";
import Data from "../Components/Data";
import Main from "../Components/Main";
import Nav from "../Components/Nav";

const Profile = () => {
  //   const params = useParams();
  //   console.log(params);
  return (
    <div>
      <Data id={"18"} extens={"activity"} />
      <Nav />
      <div className="miseEnPage">
        <Aside />
        <Main />
      </div>
    </div>
  );
};

export default Profile;

//   <BrowserRouter>
//     <Data id={"18"} extens={"activity"} />
//     <Nav />
//     <div className="miseEnPage">
//       <Aside />
//       <Main />
//     </div>
//   </BrowserRouter>;
