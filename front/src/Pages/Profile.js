import React from "react";
import Aside from "../Components/Aside";
import Main from "../Components/Main";
import Nav from "../Components/Nav";

const Profile = () => {
  return (
    <div className="profile">
      <Nav />
      <div className="miseEnPage">
        <Aside />
        <Main />
      </div>
    </div>
  );
};

export default Profile;
