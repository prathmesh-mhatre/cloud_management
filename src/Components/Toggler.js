import { React, useState } from "react";

const Toggler = () => {
  const [toggle, setToggle] = useState(0);
  console.log(toggle);

  return (
    <div className="toggler">
      <div
        className={
          toggle === 0
            ? "toggler-inactive"
            : toggle === 1
            ? "toggler-inactive"
            : "toggler-active"
        }
        onClick={() =>
          toggle === 0 || toggle === 1 ? setToggle(2) : setToggle(1)
        }
      >
        <div
          className={
            toggle === 0
              ? "toggle-button-idle"
              : toggle === 1
              ? "toggle-button-inactive"
              : "toggle-button-active"
          }
        ></div>
      </div>
    </div>
  );
};

export default Toggler;
