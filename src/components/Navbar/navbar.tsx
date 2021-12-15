import React from "react";
import "./navbar.scss";
import experios from "../../UI/logo2.png";
import connected from "../../UI/Image 7.png";
import exitGame from "../../UI/Icon metro-exit.png";
import howTopPlay from "../../UI/Icon metro-question.png";
import { ConnectedComponent } from "../connected-button1/connected-biutton1";
import Experios from "../Experios/Experios";
const Navbar = () => {
  const _exitGame: string = "EXIT GAME";
  const _connected: string = "6CONNECTED";
  const _howtoPlay: string = "How to Play";
  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="Expense">
          <Experios picPath={experios} marginLeft="4%" marginTop="3%" />
        </div>
        <div className="combnation">
          <ConnectedComponent
            text={_howtoPlay}
            picPath={howTopPlay}
            lenght={"160px"}
          />
          <ConnectedComponent
            text={_connected}
            picPath={connected}
            lenght={"190px"}
          />
          <ConnectedComponent
            text={_exitGame}
            picPath={exitGame}
            lenght={"150px"}
          />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
