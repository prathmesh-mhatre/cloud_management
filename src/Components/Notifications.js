import React from "react";
import header_art_local from "../assets/header_art_local.png";
import Nav from "./Nav";
import notifications_art from "../assets/notifications_art.png";

function Notifications() {
  return (
    <>
      <div className="local-container">
        <img src={header_art_local} alt="" className="header-art" />
        <div className="page-heading">
          <p style={{ marginLeft: "25px" }}>Notifications</p>
        </div>
        <img src={notifications_art} className="notifications-art" alt="" />
        <div className="notifications-null">
          <p>No Notifications yet</p>
        </div>
        <div className="notifications-guide">
          <p>
            Here you will see the external changes in your shared folders, tags
            from your peers and other updates
          </p>
        </div>
        <Nav active="3" />
      </div>
    </>
  );
}

export default Notifications;
