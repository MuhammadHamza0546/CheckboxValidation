import react from "react";
import "./mainwrapper1.scss";
import ButtonComp from "../Button1/Button1";
import { NumberButton } from "../boxes/box";
const mainWrapper1 = () => {
  const _exitGame: string = "EXIT GAME";
  const _showLeader: string = "SHOW LEADERBOARD";
  const _timing: string = "10:35";
  const _Remain: string = "Remaining";
  const _zero: string = "0";
  const _Incorrct: string = "Incorrect";
  const _one: string = "1";
  const _hintsUsed: string = "Hints used";

  return (
    <div className="mainwrapper1">
      <div className="mainwrapper">
        <div className="mainwrapper2">
          <div className="mainwrapper2-inside1">
            <h1>MAYDAY</h1>
          </div>
          <div className="mainwrapper2-inside2">
            <NumberButton
              headingText={_timing}
              paragText={_Remain}
              firstColor={"#5a0b0b"}
              secondColor={"#e0472d"}
            />
            <NumberButton
              headingText={_zero}
              paragText={_Incorrct}
              firstColor={"#29444f"}
              secondColor={"#263a44"}
            />
            <NumberButton
              headingText={_one}
              paragText={_hintsUsed}
              firstColor={"#29444f"}
              secondColor={"#263a44"}
            />
          </div>
        </div>
        <div className="mainwrapper3">
          <p className="mainwrapper3-insidep">Bak to safety</p>
          <p className="mainwrapper3-insidep1">
            That was one crazy adventure, but we made it off the island alive
            with Louis and the samples! I've just climbed aboard the tanker and
            the captain ensured me this ship.
            <br></br>
            <br></br>
            It better be worth it, as I'll think twice before flying a plane
            again.<br></br>
            If there's ever an emergency again, I'll definitely contact you.
          </p>
        </div>
        <div className="mainwrapper4">
          {/* <img src={pic21} alt="Girl in a jacket" /> */}
          <div className="mainwrapper4-inside"> </div>
          <div className="mainwrapper4-inside1">
            {" "}
            <p>(click to enlarge)</p>{" "}
          </div>
        </div>
        <div className="mainwrapper5">
          <p>
            Thanks for playing our online escape room.<br></br>
            You've solved it in MM:SS mins, had X incorrect answers and needed
            Xhints.<br></br>
            <br></br>
            We hope you had fun! Be sure to visit our website fun experiences.
          </p>
        </div>
        <div className="mainwrapper6">
          <div className="mainwrapper6-inside">
            <ButtonComp
              text={_showLeader}
              firstColor={"#5a0b0b"}
              secondColor={"#e0472d"}
              leftIcon={""}
              rightIcon={""}
              width="100%"
            />
            <ButtonComp
              text={_exitGame}
              firstColor={"#29444f"}
              secondColor={"#263a44"}
              leftIcon={""}
              rightIcon={""}
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default mainWrapper1;
