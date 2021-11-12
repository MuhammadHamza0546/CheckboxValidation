import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import React from "react";
import "../App.css";
import "../components/Button/Button.css";

interface IUserType {
  id: number;
  name: string;
  cnic: number;
}

const Show: React.FC<IUserType> = (props) => {
  return (
    <TableRow>
      <TableCell>
        <div className="props1">{props.id}</div>
      </TableCell>
      <TableCell>
        <div className="props">{props.name}</div>
      </TableCell>
      <TableCell>
        <div className="props">{props.cnic}</div>
      </TableCell>
    </TableRow>
  );
};

export default Show;
