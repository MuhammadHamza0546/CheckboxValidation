import { ChangeEvent } from "react";

interface IActualForms {
  elementConfig: IForms;
  elementType: string;
}

export interface IAActualForms {
  inputConfig: IActualForms;
  formValueGetter?: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface IForms {
  type: string;
  placeholder: string;
} //
