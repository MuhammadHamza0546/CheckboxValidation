import React from "react";
import "./LeaderBoard.scss";
import connected from "./UI/Image 7.png";
import logoutIcon from "./UI/Image 8.png";
import experios from "./UI/logo2.png";
import backButton from "./UI/Group 26.png";
import ConnecteedComponent from "./components/buttonforApp4/6connectedButton/6connectedButton";
import ExitComponent from "./components/buttonforApp4/ExitGameButton/ExitGameButton";
import Experios from "./components/Experios/Experios";
const leaderBoard = () => {
  return (
    // page2css
    <body>
      <nav className="navbar">
        <div className="Expense">
          <Experios picPath={experios} marginLeft="9%" marginTop="2%" />
        </div>
        <div className="combnation">
          <ConnecteedComponent picPath={connected} text="6CONNECTED" />
          <ExitComponent picPath={logoutIcon} text="LOG OUT" />
        </div>
      </nav>
      <div className="mainwrapper">
        <div className="MAYDAYLEADERBOARD">
          <h1>MAYDAY LEADERBOARD</h1>
        </div>
        <div className="tableWrapper">
          <table id="customers">
            <tr>
              <th>Rank</th>
              <th className="TeamNarre">Team Narre</th>
              <th>Hints</th>
              <th className="Incorrect">Incorrect</th>
              <th className="Result">Result</th>
            </tr>
            <tr>
              <td>1</td>
              <td>cat out of the bag</td>
              <td>1</td>
              <td>0</td>
              <td>32:10</td>
            </tr>
            <tr>
              <td>1</td>
              <td>cat out of the bag</td>
              <td>1</td>
              <td>0</td>
              <td>32:10</td>
            </tr>
            <tr>
              <td>1</td>
              <td>cat out of the bag</td>
              <td>1</td>
              <td>0</td>
              <td>32:10</td>
            </tr>
            <tr>
              <td>1</td>
              <td>cat out of the bag</td>
              <td>1</td>
              <td>0</td>
              <td>32:10</td>
            </tr>
            <tr>
              <td>1</td>
              <td>cat out of the bag</td>
              <td>1</td>
              <td>0</td>
              <td>32:10</td>
            </tr>
            <tr>
              <td>1</td>
              <td>cat out of the bag</td>
              <td>1</td>
              <td>0</td>
              <td>32:10</td>
            </tr>
            <tr>
              <td>1</td>
              <td>cat out of the bag</td>
              <td>1</td>
              <td>0</td>
              <td>32:10</td>
            </tr>
            <tr>
              <td>1</td>
              <td>cat out of the bag</td>
              <td>1</td>
              <td>0</td>
              <td>32:10</td>
            </tr>
            <tr>
              <td>1</td>
              <td>cat out of the bag</td>
              <td>1</td>
              <td>0</td>
              <td>32:10</td>
            </tr>
            <tr>
              <td>1</td>
              <td>cat out of the bag</td>
              <td>1</td>
              <td>0</td>
              <td>32:10</td>
            </tr>
          </table>
        </div>
        <div className="button">
          <img src={backButton} alt="Girl in a jacket" />
        </div>
      </div>
    </body>
    // page2css
  );
};
export default leaderBoard;
