import React from "react";
import header_art_local from "../assets/header_art_local.png";
import Nav from "./Nav";
import SearchBar from "./SearchBar";
import localData from "../Data/localData";
import file_icon_music from "../assets/file_icon_music.png";
import file_icon_image from "../assets/file_icon_image.png";
import file_icon_zip from "../assets/file_icon_zip.png";
import file_icon_video from "../assets/file_icon_video.png";
import button_icon_option from "../assets/button_icon_option.png";
import icon_video from "../assets/icon_video.png";
import icon_image from "../assets/icon_image.png";
import icon_music from "../assets/icon_music.png";
import icon_zip from "../assets/icon_zip.png";

const Local = () => {
  return (
    <>
      <div className="local-container">
        <img src={header_art_local} alt="" className="header-art" />
        <div className="page-heading">
          <p style={{ marginLeft: "25px" }}>Local Storage</p>
        </div>
        <SearchBar />
        <section className="filetype-carousel ">
          <div className="carousel-item">
            <img src={icon_video} alt="" />
          </div>
          <div className="carousel-item">
            <img src={icon_image} alt="" />
          </div>
          <div className="carousel-item">
            <img src={icon_music} alt="" />
          </div>
          <div className="carousel-item">
            <img src={icon_zip} alt="" />
          </div>
        </section>
        <section className="files-container">
          {localData.map((file) => {
            return (
              <File
                fileName={file.fileName}
                fileType={file.fileType}
                fileSize={file.fileSize}
              />
            );
          })}
        </section>
        <Nav active="2" />
      </div>
    </>
  );
};

const File = ({ fileName, fileType, fileSize }) => {
  console.log(fileName);
  return (
    <>
      <div className="file">
        <div>
          <img
            src={
              fileType === "mp3"
                ? file_icon_music
                : fileType === "jpg"
                ? file_icon_image
                : fileType === "zip"
                ? file_icon_zip
                : file_icon_video
            }
            alt=""
          />
        </div>
        <div className="file-text">
          <div className="file-name">
            <p>{fileName}</p>
          </div>
          <div className="file-info">
            <p>
              {fileType} . {fileSize}
            </p>
          </div>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <img src={button_icon_option} alt="" />
        </div>
      </div>
    </>
  );
};

export default Local;
