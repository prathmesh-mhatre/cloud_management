import React from "react";
import button_small from "../assets/buttons_small.png";

let i = "35%";

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="sub-container">
          <section className="greeting-section">
            <div className="greeting">Hello Jessie, </div>
            <div className="sub-text">at the moment you have</div>
            <div className="free-storage">
              <div className="storage-amount">32,5 GB</div>
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
            <input
              className="search-bar"
              type="text"
              defaultValue="      Search"
            />
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
        </section>
      </div>
    </>
  );
}

export default Home;
