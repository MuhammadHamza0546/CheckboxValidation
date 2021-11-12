import React from "react";
import { IAActualForms } from "../../Interfaces/IAActualForms";
import "../Button/Button.css";

const Input: React.FC<IAActualForms> = (props) => {
  let inputElement = null;

  switch (props.inputConfig.elementType) {
    case "input":
      inputElement = (
        <input
          className="search-bar1"
          {...props.inputConfig.elementConfig}
          onChange={props.formValueGetter}
        />
      );
      break;
    default:
      inputElement = <input {...props.inputConfig.elementConfig} />;
  }

  return (
    <div>
      <form>{inputElement}</form>
    </div>
  );
};

export default Input;
