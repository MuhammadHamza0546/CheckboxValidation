import React from "react";
import "./GettingReady.scss";
import conectedIcon from "./UI/Image 7.png";
import experiosIcon from "./UI/logo2.png";
import logoutIcon from "./UI/Icon metro-exit.png";
import StartGameButton from "./components/buttonforApp4/RedButton/RedButton";
import ConnecteedComponent from "./components/buttonforApp4/6connectedButton/6connectedButton";
import ExitComponent from "./components/buttonforApp4/ExitGameButton/ExitGameButton";
import Checkbox from "./components/Checkbox/Checkbox";
import Experios from "./components/Experios/Experios";
import ButtonComp from "../src/components/Button1/Button1";
import backButton from "../src/UI/outline_arrow_back_white_24dp.png";
import humberger from "../src/UI/outline_menu_black_24dp.png";
import { useState, useEffect, FunctionComponent } from "react";
import { stringify } from "querystring";

interface Size {
  width: number;
  height: number;
}

const GettingReady = () => {
  const [setter, setSetter] = useState<boolean>(false);
  // const [settter, setSettter] = useState<boolean>(false);
  const [size, setSize] = useState<Size>();
  const resizeHanlder = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    setSize({
      width: width,
      height: height,
    });
  };

  const myFunction = () => {
    console.log("Hamza");
    setSetter(!setter);
  };

  useEffect(() => {
    window.onresize = resizeHanlder;

    // You can also use:
    // window.addEventListener('resize', resizeHanlder);
  }, []);

  return (
    // page2css
    <body>
      <nav className="navbar">
        <div className="behindEC"></div>
        <div className="EC">
          <div className="Expense">
            <Experios picPath={experiosIcon} marginLeft="4%" marginTop="3%" />
          </div>
          <div
            className="combnation"
            style={{
              display: setter && (size?.width || "") <= 800 ? "flex" : "none",

              // background: !size || size.width >= 800 ? "red" : "green",
            }}
          >
            <ConnecteedComponent text="6CONNECTED" picPath={conectedIcon} />
            <ExitComponent text="EXIT GAME" picPath={logoutIcon} />
          </div>
          <div className="combnation1">
            <ConnecteedComponent text="6CONNECTED" picPath={conectedIcon} />
            <ExitComponent text="EXIT GAME" picPath={logoutIcon} />
          </div>
        </div>
        <div className="humberger" onClick={myFunction}>
          <img src={humberger} alt="Girl in a jacket" />
        </div>
      </nav>
      <div className="mainwrapper1">
        <div className="mainwrapper">
          <div className="wrapper-outside1">
            <div className="wrapper-outside11">
              <h3>TEAM NAME</h3>

              <p>
                Now make sure you come up with a catchy team name that between 5
                and 15 chracters.
                <br></br> This is also shown on the leaderboard,if you make it.
                <br></br>
                <br></br>
                Only one person in your team needs to enter the teamname.
                <br></br>
                Once you start the game,the team name can no longer be changed.
              </p>
            </div>
            <div className="wrapper-outside111">
              <form>
                <input
                  className="search-bar1"
                  type="text"
                  id="lname"
                  name="lname"
                  placeholder="Enter your Team Name"
                ></input>
              </form>
            </div>
          </div>
          <div className="wrapper-outside">
            <div className="wrapper1">
              <h3>GET STARTED</h3>
              <p>
                Make sure you have set up a video call a nd everyone has
                joined,in case you are not physically.
                <br></br>You can use Zomm,Teams,<u>The PubHub</u> or any other
                tool you'd like.
                <br></br>
                <br></br>
                When all players are ready,any player can check all the
                checkboxes a nd press the Start Game button.
                <br></br>
                This will start the game for everyone.
              </p>
            </div>
            <div className="wrapper2">
              <Checkbox
                text={
                  " All the players in my team are logged in and ready to startc"
                }
              />
              <Checkbox
                text={
                  " All the players in my team are on the same video call or are physically together"
                }
              />
              <Checkbox
                text={
                  " I understand that pressing that the start Game button starts the game for everyone"
                }
              />
            </div>
            <div className="wrapper-outside2">
              <div className="button-wrapper">
                <ButtonComp
                  text={"Back"}
                  firstColor={"#5a0b0b"}
                  secondColor={"#e0472d"}
                  leftIcon={backButton}
                  rightIcon={""}
                  width="100%"
                />
                <StartGameButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
    // page2css
  );
};
export default GettingReady;
