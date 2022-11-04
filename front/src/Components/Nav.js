import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../Assets/img/Logo_SportSee.png";

/**
 * Component Nav
 * Allows to create the navigation menu as well as are contained (logo, button, links ).
 *
 */

const Nav = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo de l'entreprise Kasa" />
      </div>
      <nav className="header__nav">
        <ul className="header__nav__ul">
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "header__nav__ul--active" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to=""
            className={(nav) => (nav.isActive ? "header__nav__ul--active" : "")}
          >
            <li>Profil</li>
          </NavLink>
          <NavLink
            to=""
            className={(nav) => (nav.isActive ? "header__nav__ul--active" : "")}
          >
            <li>Réglage</li>
          </NavLink>
          <NavLink
            to=""
            className={(nav) => (nav.isActive ? "header__nav__ul--active" : "")}
          >
            <li>Communauté</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
