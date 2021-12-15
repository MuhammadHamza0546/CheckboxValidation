import { width } from "@mui/system";
import React from "react";
import pic20 from "../../UI/Icon metro-question.png";
interface ITextProps {
  text: string;
  picPath: string;
  lenght:string;
}
const ConnectedComponent: React.FC<ITextProps> = (props) => {
  return (
    <div className="connected1" style={{width:props.lenght}}>
      <img
        className="connect-logo-1"
        src={props.picPath}
        alt="Girl in a jacket"
      />

      <h3 className="connect-logo-2">{props.text}</h3>
    </div>
  );
};
export { ConnectedComponent };
