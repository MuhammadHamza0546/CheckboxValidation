import React, { ChangeEvent } from "react";
export interface ICheckBox {
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<ICheckBox> = (props) => {
  return <input type="checkbox" {...props} />;
};
export default Checkbox;
