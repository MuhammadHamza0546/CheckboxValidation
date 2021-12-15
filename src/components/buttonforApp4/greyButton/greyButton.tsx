import React from "react";
import "./greyButton.scss";
import pic19 from "../../../UI/outline_arrow_back_white_24dp.png";
const startGameButton = () => {
  return (
    <button className="button">
      <img className="connect-logo-55" src={pic19} alt="Girl in a jacket" />
      <p> BACK </p>
    </button>
  );
};

export default startGameButton;
