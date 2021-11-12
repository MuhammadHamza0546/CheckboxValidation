import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import React, { useState, useEffect } from "react";
import { ChangeEvent } from "react";
import "./App.css";
import ButtonComp from "./components/Button/Button";
import Show from "./components/show";
import "./components/Button/Button.css";
import Input from "./components/Input/Input";
import Checkbox from "./components/Checkbox/Checkbox";
import useDebounce from "./hooks/useDebounce";
import { IAActualForms } from "./Interfaces/IAActualForms";
import { FaSortDown, FaSortUp } from "react-icons/fa";

//interfaces for the 1st state
export interface IUserType {
  id: number;
  name: string;
  cnic: number;
}

interface ICheckboxNameType {
  name: string;
  checkboxstate: boolean;
}

interface ICheckBox {
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
let flaaaag: number = 0;
let flaaag: number = 0;
let flaag: number = 0;
let flag: number = 0;
let arrayDecider: boolean = false;
let emptyArrayOfObj: JSX.Element[];
let finalArray: JSX.Element[];
let searchArrayOfJsx: JSX.Element[];
let searchArrayOfObj = [];
let copyArray: Array<IUserType> = [];
let detail1: JSX.Element[];
let detail2: Array<IUserType> = [];
let nameForRenderingArray: Array<string> = [];

const App = () => {
  const [setter, setSetter] = useState<string>(" ");

  React.useState<boolean>(false);
  let debouncedValue = useDebounce(setter, 500);
  const [array, setArray] = useState<IUserType[]>([
    {
      id: 1,
      name: "shakeel",
      cnic: 5465,
    },
    {
      id: 4,
      name: "Hamza",
      cnic: 12345,
    },
    {
      id: 3,
      name: "Rehan",
      cnic: 12345,
    },
    {
      id: 2,
      name: "Roman",
      cnic: 12345,
    },
  ]);

  if (flaag === 0) {
    copyArray = [...array];
  }

  const [checkBoxInputField, setCheckBoxInputField] = useState<
    ICheckboxNameType[]
  >([
    {
      name: "All",
      checkboxstate: true,
    },
  ]);

  const handleCheckBoxChange = (
    e: ChangeEvent<HTMLInputElement>,
    indexGot: number
  ): void => {
    if (indexGot === 0) {
      flaag = 1;
      setArray(copyArray);
      arrayDecider = false;
      detail1 = [];
      detail2 = [];
      nameForRenderingArray = [];
      setCheckBoxInputField((prev: ICheckboxNameType[]) => [
        ...prev.map((prev: ICheckboxNameType) => {
          if (prev.name === "All") {
            return { ...prev, checkboxstate: true };
          } else {
            return { ...prev, checkboxstate: false };
          }
        }),
      ]);
    }
    if (indexGot !== 0) {
      console.log(detail1, "tester");
      console.log(detail2, "tester");
      console.log(nameForRenderingArray, "tester");
      setCheckBoxInputField((prev: ICheckboxNameType[]) => [
        ...prev.map((prev: ICheckboxNameType, index: number) => {
          if (prev.name === "All") {
            arrayDecider = true;
            return { ...prev, checkboxstate: false };
          }
          if (indexGot === index) {
            console.log(index, "index");
            console.log(indexGot, "index Got");
            console.log(prev.name, "prev.name");
            nameForRenderingArray.push(prev.name);

            detail2 = array.filter((obj: IUserType) => {
              for (let i = 0; i < nameForRenderingArray.length; i++) {
                if (obj.name.includes(nameForRenderingArray[i])) {
                  flaaag = 1;
                  console.log("hamza");
                  console.log(
                    nameForRenderingArray[i],
                    "nameForRenderingArray[i]"
                  );
                  return (
                    <>
                      <Show id={obj.id} cnic={obj.cnic} name={obj.name} />
                    </>
                  );
                }
              }
            });
            console.log(detail2, "detail2 for loop");
            console.log("testing");
            return { ...prev, checkboxstate: true };
          } else {
            return { ...prev };
          }
        }),
      ]);
    }
  };

  const [inputElements] = useState<IAActualForms>({
    inputConfig: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Search",
      },
    },
  });

  const formValueGetter = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value === "") {
      return;
    }
    let count = 0;

    for (let i = 0; i < array.length; i++) {
      if (!array[i].name.includes(e.target.value)) {
        console.log("valueCheckher555");
        count = count + 1;
      }
    }
    if (count === array.length) {
      console.log("count === array.length1st");
      flaaaag = 1;
      setSetter(e.target.value);
    } else {
      console.log("count === array.length2nd");
      flaaaag = 0;
      setSetter(e.target.value);
    }
  };

  useEffect(() => {
    console.log("use Effect");
    searchArrayOfObj = array.filter((obj) => {
      if (obj.name.includes(setter)) {
        console.log("mainer");
        flag = 1;
        arrayDecider = true;
        return obj;
      }
    });

    searchArrayOfJsx = searchArrayOfObj.map((obj) => {
      return <Show id={obj.id} cnic={obj.cnic} name={obj.name} />;
    });
    if (flaaaag === 1) {
      flag = 1;
      arrayDecider = true;
      console.log("flaaaag===1");
      detail1 = [...searchArrayOfJsx];
      detail1 = [];
      console.log(detail1, "First");
    }
    if (flaaaag === 0) {
      console.log("flaaaag===0");
      detail1 = [...searchArrayOfJsx];
    }

    if (flag === 1) {
      console.log(flag, "flag=1");

      let obj1 = {
        name: debouncedValue,
        checkboxstate: true,
      };

      setCheckBoxInputField((prev: ICheckboxNameType[]) => [
        ...prev.map((prev: ICheckboxNameType) => {
          return { ...prev, checkboxstate: false };
        }),
        obj1,
      ]);
    }
  }, [debouncedValue]);
  let detail: any = [];
  if (arrayDecider === false) {
    if (flaag === 0) {
      detail = array.map((obj) => {
        return (
          <>
            <Show id={obj.id} cnic={obj.cnic} name={obj.name} />
          </>
        );
      });
    }
    if (flaag === 1) {
      detail = array.map((obj) => {
        return (
          <>
            <Show id={obj.id} cnic={obj.cnic} name={obj.name} />
          </>
        );
      });
    }
  }

  finalArray = checkBoxInputField.map(
    (obj: ICheckboxNameType, index: number) => {
      return (
        <>
          <div className="checkboxNameAlligner">
            <div>
              <Checkbox
                checked={obj.checkboxstate}
                onChange={(e) => handleCheckBoxChange(e, index)}
              />
            </div>
            <div>{obj.name}</div>
          </div>
        </>
      );
    }
  );

  const asecendingSorter = () => {
    let sortedArrayOfObj: Array<IUserType> = [];
    sortedArrayOfObj = [...array];
    sortedArrayOfObj.sort((a: IUserType, b: IUserType) => {
      return a.id - b.id;
    });
    setArray(sortedArrayOfObj);
  };

  const desecendingSorter = () => {
    let sortedArrayOfObj: Array<IUserType> = [];
    sortedArrayOfObj = [...array];
    sortedArrayOfObj.sort((a: IUserType, b: IUserType) => {
      return b.id - a.id;
    });
    setArray(sortedArrayOfObj);
  };

  if (flaaag === 1) {
    console.log("testing");
    console.log(detail1, "detail1");
    console.log(detail2, "detail2");
    detail1 = detail2.map((obj: IUserType) => {
      return (
        <>
          <Show id={obj.id} cnic={obj.cnic} name={obj.name} />
        </>
      );
    });
  }
  console.log(detail1, "second");
  console.log(detail1, "second111");
  return (
    <>
      <div className="buttonAndH2Wrapper">
        <div className="h2Wrapper">
          <h3>Installations</h3>
        </div>

        <div className="buttonWraper">
          <ButtonComp />
        </div>
      </div>

      <Input
        inputConfig={{
          elementType: inputElements.inputConfig.elementType,
          elementConfig: inputElements.inputConfig.elementConfig,
        }}
        formValueGetter={formValueGetter}
        // onKeyDown={onKeyDown}
      />

      <div className="checkboxNameAndInstallations">
        <h4>::Installations</h4>
        <div className="checkboxNameAllignerWrapper">{finalArray}</div>
      </div>
      <Table>
        <TableRow>
          <TableCell className="TableCellColor">
            <div className="iconsTag-wrapper ">
              <div className="icons-wrapper ">
                <FaSortUp className="container" onClick={asecendingSorter} />
                <FaSortDown className="container" onClick={desecendingSorter} />
              </div>
              <div>ID Number</div>
            </div>
          </TableCell>
          <TableCell className="TableCellColor">
            <div className="iconsTag-wrapper ">
              <div className="icons-wrapper ">
                <FaSortUp className="container" />
                <FaSortDown className="container" />
              </div>
              <div>| Name</div>
            </div>
          </TableCell>
          <TableCell className="TableCellColor">
            <div className="iconsTag-wrapper ">
              <div className="icons-wrapper ">
                <FaSortUp className="container" />
                <FaSortDown className="container" />
              </div>
              <div>| CNIC</div>
            </div>
          </TableCell>
        </TableRow>
        {detail}

        {detail1}
      </Table>
    </>
  );
};
export default App;
