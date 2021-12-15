import React from "react";

import pic18 from "../../../UI/Icon metro-exit.png";
interface ITextProps {
  text: string;
  picPath: string;
}
const ExitComponent: React.FC<ITextProps> = (props) => {
  return (
    <div className="Logout">
      <img className="connect-logo-5" src={props.picPath} alt="Girl in a jacket" />
      <h3 className="connect-logo-6">{props.text}</h3>
    </div>
  );
};
export default ExitComponent;
