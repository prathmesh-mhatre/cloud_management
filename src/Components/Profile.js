import React from "react";
import header_art_local from "../assets/header_art_local.png";
import homeData from "../Data/homeData";
import Nav from "./Nav";

let i = homeData.freeData + "%";

function Profile() {
  return (
    <>
      <div className="local-container">
        <img src={header_art_local} alt="" className="header-art" />
        <div className="profile-heading">
          <p style={{ marginLeft: "25px" }}>Profile</p>
        </div>
        <div className="profile-info">
          <img
            className="profile-img"
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            alt=""
          />
          <div className="person-info">
            <div className="person-name">
              <p>Jessie Robert</p>
            </div>
            <div className="person-details">
              <p>1458 files . 25 folders</p>
            </div>
          </div>
        </div>
        <Nav active="4" />
      </div>
    </>
  );
}

export default Profile;
