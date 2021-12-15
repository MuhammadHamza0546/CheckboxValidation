import React from "react";
import "./MainMenu.scss";
import connectedIcon from "./UI/Image 7.png";
import logoutIcon from "./UI/Image 8.png";
import experiosIcon from "./UI/logo2.png";
import Experios from "./components/Experios/Experios";
import { ConnectedComponent } from "./components/connected-button1/connected-biutton1";
import ExitComponent from "./components/buttonforApp4/ExitGameButton/ExitGameButton";
import Cards from "./components/cards/cards";
import Navbar from "./components/Navbar/navbar";
const mainMenu = () => {
  return (
    // page1
    <body>
      <nav className="navbar">
        <div className="nav-wrapper">
          <div className="Expense">
            <Experios picPath={experiosIcon} marginLeft="4%" marginTop="3%" />
          </div>
          <div className="combnation">
            <ConnectedComponent
              text={"6connected"}
              picPath={connectedIcon}
              lenght={"200px"}
            />
            <ConnectedComponent
              text={"LOG OUT"}
              picPath={logoutIcon}
              lenght={"141px"}
            />
          </div>
        </div>
      </nav>
      <div className="mainWrapper1">
        <div className="mainWrapper">
          <div className="secondWrapper">
            <div className="firstWrapper">
              <p>Experious presents</p>
            </div>
            <h1>MAYDAY</h1>
          </div>
        </div>
        <Cards />
      </div>
    </body>
  );
};
export default mainMenu;
