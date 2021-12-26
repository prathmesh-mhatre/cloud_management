import React from "react";
import { Link } from "react-router-dom";
import nav_icon_home from "../assets/nav_icon_home.png";

function Nav() {
  return (
    <>
      <nav className="nav-bar">
        <Link to="/Home">
          <img src={nav_icon_home} alt="home button" />
        </Link>
      </nav>
    </>
  );
}

export default Nav;
