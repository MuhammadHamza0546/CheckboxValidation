import react from "react";
import "./Button1.scss";
interface ITextProps {
  text: string;
  firstColor: string;
  secondColor: string;
  width: string;
  leftIcon: string;
  rightIcon: string;
}
const buttonComp: React.FC<ITextProps> = (props) => {
  return (
    <div
      className="mainwrapper6-button1"
      style={{
        backgroundImage: `linear-gradient(${props.firstColor} , ${props.secondColor})`,
        width: props.width,
      }}
    >
      <img src={props.leftIcon} />
      <p>{props.text}</p>
      <img src={props.rightIcon} />
    </div>
  );
};
export default buttonComp;
