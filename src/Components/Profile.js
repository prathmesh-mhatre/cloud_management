import React from "react";
import header_art_local from "../assets/header_art_local.png";
import homeData from "../Data/homeData";
import Nav from "./Nav";
import Toggler from "./Toggler";
import icon_right_arrow from "../assets/icon_right_arrow.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

let i = 100 - homeData.freeData + "%";

function Profile() {
  return (
    <>
      <img src={header_art_local} alt="" className="header-art" />
      <div className="profile-container">
        <div className="heading-container">
          <p className="profile-heading">Profile</p>
          <div className="edit-button">
            <FontAwesomeIcon icon={faEdit} />
          </div>
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
        <section className="storage-info">
          <div>
            <p className="big-text">35.5 GB free</p>
          </div>
          <div>
            <p className="small-text">of 100 GB</p>
          </div>
        </section>
        <div className="storage-indicator">
          <div className="pink" style={{ width: i }}></div>
        </div>
        <button className="increase-storage">
          <p className="increase-text">Increase storage space</p>
        </button>
        <div className="options">
          <p className="option-text">Storage management</p>
          <img src={icon_right_arrow} className="sub-option"></img>
        </div>
        <div className="options">
          <div className="option-2text">
            <p className="option-text">Devices</p>
            <p className="option-sub-text">iPhone, Macbook, iPad</p>
          </div>
          <img src={icon_right_arrow} className="sub-option"></img>
        </div>
        <div className="options">
          <p className="option-text">Camera Uploads</p>
          <Toggler />
        </div>
        <div className="options">
          <p className="option-text">Use data for filetransfer </p>
          <Toggler />
        </div>
      </div>
      <Nav active="4" />
    </>
  );
}

export default Profile;
