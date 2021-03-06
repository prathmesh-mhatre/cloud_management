import React from "react";
import { Link } from "react-router-dom";
import nav_icon_home from "../assets/nav_icon_home.png";
import nav_icon_home_active from "../assets/nav_icon_home_active.png";
import nav_icon_action from "../assets/nav_icon_action.png";
import nav_icon_local from "../assets/nav_icon_local.png";
import nav_icon_local_active from "../assets/nav_icon_local_active.png";
import nav_icon_notification from "../assets/nav_icon_notification.png";
import nav_icon_notification_active from "../assets/nav_icon_notification_active.png";
import nav_icon_profile from "../assets/nav_icon_profile.png";
import nav_icon_profile_active from "../assets/nav_icon_profile_active.png";

const Nav = ({ active }) => {
  return (
    <>
      <nav className="nav-bar">
        <Link to="/home">
          <div>
            <img
              className={active === "1" ? "nav-item-up" : "nav-item"}
              src={active === "1" ? nav_icon_home_active : nav_icon_home}
              alt="home button"
            />
          </div>
        </Link>
        <Link to="/local">
          <div className="nav">
            <img
              className={active === "2" ? "nav-item-up" : "nav-item"}
              src={active === "2" ? nav_icon_local_active : nav_icon_local}
              alt="home button"
            />
          </div>
        </Link>
        <Link to="/action">
          <div className="nav">
            <img
              className="nav-action"
              src={nav_icon_action}
              alt="action button"
            />
          </div>
        </Link>
        <Link to="/notifications">
          <div className="nav">
            <img
              className={active === "3" ? "nav-item-up" : "nav-item"}
              src={
                active === "3"
                  ? nav_icon_notification_active
                  : nav_icon_notification
              }
              alt="notifications button"
            />
          </div>
        </Link>
        <Link to="/profile">
          <div className="nav">
            <img
              className={active === "4" ? "nav-item-up" : "nav-item"}
              src={active === "4" ? nav_icon_profile_active : nav_icon_profile}
              alt="profile button"
            />
          </div>
        </Link>
      </nav>
    </>
  );
};

export default Nav;
