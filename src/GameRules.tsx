import React from "react";
import "./GameRules.scss";
import connectedIcon from "./UI/Image 7.png";
import Logout from "./UI/Image 8.png";
import experiosIcon from "./UI/logo2.png";
import ConnecteedComponent from "./components/buttonforApp4/6connectedButton/6connectedButton";
import ExitComponent from "./components/buttonforApp4/ExitGameButton/ExitGameButton";
import WapperOutside from "./components/mainwrapperforApp3/wrapperOutside";
import Experios from "./components/Experios/Experios";
import ButtonComp from "./components/Button1/Button1";
import forwardButton from "../src/UI/outline_arrow_forward_white_24dp.png";
import humberger from "../src/UI/outline_menu_black_24dp.png";
const gameRules = () => {
  return (
    // page2css
    <body>
      <nav className="navbar">
        <div className="Expense">
          <Experios picPath={experiosIcon} marginLeft="9%" marginTop="2%" />
        </div>
        <div className="combnation">
          <ConnecteedComponent text="6CONNECTED" picPath={connectedIcon} />
          <ExitComponent text="LOG OUT" picPath={Logout} />
        </div>
        <div className="humberger">
          <img src={humberger} alt="Girl in a jacket" />
        </div>
      </nav>
      <div className="mainwrapper1">
        <div className="mainwrapper">
          <div className="wrapper-outside1">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing.
            </p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution .
            </p>
          </div>
          <WapperOutside />
          <ButtonComp
            text={"CONTINUE"}
            firstColor={"#F80505"}
            secondColor={" #941B18"}
            leftIcon={""}
            rightIcon={forwardButton}
            width="40%"
          />
        </div>
      </div>
    </body>
    // page2css
  );
};
export default gameRules;
