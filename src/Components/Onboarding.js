import React from "react";
import { Link } from "react-router-dom";
import onboarding_art from "../assets/onboarding_art.png";
import onboarding_icon from "../assets/onboarding_icon.png";

function Onboarding() {
  return (
    <>
      <div>
        <img
          className="onboardingArt"
          src={onboarding_art}
          alt="man sitting on the server with laptop on his lap"
        />
      </div>
      <div className="onboardingCaption">
        <p>Your cloud storage safe and sound</p>
      </div>
      <Link to="/Home" className="onboardingIcon">
        <img src={onboarding_icon} alt="icon with righ arrow" />
      </Link>
    </>
  );
}

export default Onboarding;
