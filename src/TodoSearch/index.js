import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch () {

const {
  serchValue,
  setSerchValue
} = React.useContext(TodoContext);

    return (
   <input placeholder="Cortar cebolla" className='TodoSearch' 
   value={serchValue} 
   onChange={(event) => setSerchValue (event.target.value)}>
   </input>
    );
  }

  export { TodoSearch }