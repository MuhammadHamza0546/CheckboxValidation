import React from "react";
import pic9 from "../../../UI/Image 7.png";
interface ITextProps {
  text: string;
  picPath: string;
}
const ConnecteedComponent: React.FC<ITextProps> = (props) => {
  return (
    <div className="connected">
      <img className="connect-logo-1" src={pic9} alt="Girl in a jacket" />
      <h3 className="connect-logo-2">6CONNECTED</h3>
    </div>
  );
};
export default ConnecteedComponent;
