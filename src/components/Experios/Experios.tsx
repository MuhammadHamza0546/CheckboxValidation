import react from "react";

import "./Experios.scss";
interface IMarginWidth{
    marginLeft:string;
    marginTop:string;
    picPath:string;
}
const Experios:React.FC<IMarginWidth>=(props)=>{
    return(
        <img className="connect-logo-22" src={props.picPath} alt="Girl in a jacket" style={{marginLeft:props.marginLeft,marginTop:props.marginTop}} />
    )
}
export default Experios;