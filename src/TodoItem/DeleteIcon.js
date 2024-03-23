import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";

function DeleteIcon(props){
    return (
        <FaDeleteLeft 
        className='Icon Icon-delete'
        onClick={props.onDelete} />
    );
}

export {DeleteIcon};