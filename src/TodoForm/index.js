import React from "react";
import './TodoForm.css';
import {TodoContext} from '../TodoContext'

function TodoForm(){

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = (event) =>{
        event.preventDefault();
        setOpenModal(false);
    };

    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    };

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo todo</label>
            <textarea onChange={onChange} value={newTodoValue} placeholder="Cortar cebolla para el almuerzo"
            />
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button--cancel"
                type="button"
                onClick={onCancel}>
                Cancelar</button>
                <button type="submit" className="TodoForm-button TodoForm-button--add">
                Añadir
                </button>
            </div>
        </form>
    );
}

export {TodoForm}