import React from "react";
import { FaCheck } from "react-icons/fa";

function CompleteIcon(props){
    return (
       <FaCheck 
       className=
       {`Icon Icon-check ${props.completed && "Icon-check--active"}`}
       onClick={props.onComplete}
        />
    );
}

export {CompleteIcon};