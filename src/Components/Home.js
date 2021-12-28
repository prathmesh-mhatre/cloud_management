import React from "react";
import button_small from "../assets/buttons_small.png";
import homeData from "../Data/homeData";
import FolderCard from "./FolderCard";
import header_art_local from "../assets/header_art_local.png";
import SearchBar from "./SearchBar";
import Nav from "./Nav";

let i = 100 - homeData.freeData + "%";

function Home() {
  console.log(homeData);
  return (
    <>
      <div className="home-container">
        <img src={header_art_local} className="header-art"></img>
        <div className="sub-container">
          <section className="greeting-section">
            <div className="greeting">Hello {homeData.userName}, </div>
            <div className="sub-text">at the moment you have</div>
            <div className="free-storage">
              <div className="storage-amount">{homeData.freeData} GB</div>
              <div className="sub-text2">of 100 GB free</div>
              <img
                src={button_small}
                className="up-arrow"
                alt=" upword arrow icon"
              />
            </div>
            <div className="storage-indicator">
              <div className="pink" style={{ width: i }}></div>
            </div>
          </section>
        </div>
        <section className="files-folders">
          <div className="sub-container">
            <SearchBar />
          </div>
          <section className="tabs">
            <div className="tab">Files</div>
            <div className="tab">FOLDERS</div>
          </section>
          <div className="toggle-bar">
            <div className="toggle-right"></div>
            <div className="toggle-left"></div>
          </div>
          <div className="grey-bar"></div>
          <section className="cards">
            {homeData.folders.map((folder) => {
              return (
                <FolderCard
                  key={folder.id}
                  folderName={folder.folderName}
                  folderSize={folder.folderSize}
                  subFolders={folder.subFolders}
                  users={folder.users}
                />
              );
            })}
          </section>
          <Nav active={"1"} />
        </section>
      </div>
    </>
  );
}

export default Home;
