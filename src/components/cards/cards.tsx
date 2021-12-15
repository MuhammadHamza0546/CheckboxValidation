import react from "react";
import cardIcon from "../../UI/Path 6 Copy 2.png";
import circleIcon from "../../UI/Group 3 Copy.png";
import flowerIcon from "../../UI/Group 4.png";
import leaderBoardIcon from "../../UI/Group 8.png";
import questionMark from "../../UI/asset1.png";
import redCard from "../../UI/Path 6.png";
import playButton from "../../UI/Group 3.png";
const cards = () => {
  return (
    <div className="thirdWrapper">
      <div className="greylogo">
        <img src={cardIcon} alt="Girl in a jacket" />
        <div className="logo3">
          <img src={circleIcon} alt="Girl in a jacket" />
          <div>
            <img
              className="logo3-inside"
              src={flowerIcon}
              alt="Girl in a jacket"
            />
          </div>
        </div>
        <div className="text1">
          <h3>OUR GAMES</h3>
        </div>
      </div>

      <div className="greylogo">
        <img src={cardIcon} alt="Girl in a jacket" />
        <div className="logo4">
          <img className="logo2" src={circleIcon} alt="Girl in a jacket" />
          <div>
            <img
              className="logo4-inside"
              src={leaderBoardIcon}
              alt="Girl in a jacket"
            />
          </div>
        </div>
        <div className="text2">
          <h3>LEADERBOARD</h3>
        </div>
      </div>

      <div className="greylogo">
        <img src={cardIcon} alt="Girl in a jacket" />
        <div className="logo3">
          <img src={circleIcon} alt="Girl in a jacket" />
          <div>
            <img
              className="logo5-inside"
              src={questionMark}
              alt="Girl in a jacket"
            />
          </div>
        </div>
        <div className="text3">
          <h3>HOW TO PLAY</h3>
        </div>
      </div>
      <div className="greylogo">
        <img src={redCard} alt="Girl in a jacket" />
        <div className="logo3">
          <img src={playButton} alt="Girl in a jacket" />
        </div>
        <div className="text4">
          <h3>GET STARTED</h3>
        </div>
      </div>
    </div>
  );
};
export default cards;
