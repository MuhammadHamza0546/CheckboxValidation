import react from "react";
import "./OverviewTeamworkPenaltiesWrapper.scss";

interface ITextProps {
  text1: string;
  text2: string;
  text3: string;
  picPath: string;
}
const OverviewTeamworkPenaltiesWrapper: React.FC<ITextProps> = (props) => {
  return (
    <div className="wrapper1">
      <div className="wrapper1-inside1">
        <img src={props.picPath} alt="Girl in a jacket" />
      </div>
      <div className="wrapper1-inside2">
        <strong>{props.text1}</strong>
        <p>{props.text2}</p>
        <p>{props.text3}</p>
      </div>
    </div>
  );
};

export default OverviewTeamworkPenaltiesWrapper;
