import React from "react";
interface IText{
  text:string;
}
const Checkbox:React.FC<IText> = (props) => {
  return (
    <label className="myCheckbox  myCheckbox1">
    <input type="checkbox" name="test" />
    <span></span>
    <label className="label-for">
      {" "}
     {props.text}
    </label>
  </label>
  );
};
export default Checkbox;
