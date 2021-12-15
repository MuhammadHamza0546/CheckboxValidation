import React from "react";
import "./box.scss";
interface ITextProps {
  headingText: string;
  paragText: string;
  firstColor: string;
  secondColor: string;
}
const NumberButton: React.FC<ITextProps> = (props) => {
  console.log(props.firstColor, "props.color1");
  console.log(props.secondColor, "props.color2");
  return (
    <div
      className="box1"
      style={{
        backgroundImage: `linear-gradient(${props.firstColor} , ${props.secondColor})`,
      }}
    >
      <h1>{props.headingText}</h1>
      <p>{props.paragText}</p>
    </div>
  );
};
export { NumberButton };
