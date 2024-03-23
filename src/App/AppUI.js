import{TodoCounter}from '../TodoCounter';
import{TodoSearch}from '../TodoSearch';
import{TodoList}from '../TodoList';
import{TodoItem}from '../TodoItem';
import{CreateTodoButton}from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';
import React from 'react';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import {TodoForm} from '../TodoForm';

function AppUI(){

const {
  loading,
  error,
  serchedTodos,
  completeTodo,
  deleteTodo,
  openModal,
  setOpenModal,
} = React.useContext(TodoContext);
    return(
        <>
          <TodoCounter/>
          <TodoSearch/>
             <TodoList>
             {loading && (<><TodosLoading/>
             <TodosLoading/>
             <TodosLoading/></>)}
             {error && <TodosError/>}
             {(!loading && serchedTodos.length === 0) && <TodosEmpty/>}
             
             {serchedTodos.map(todo=>(
           <TodoItem
             key={todo.text}
             text={todo.text}
             completed={todo.completed}
             onComplete={() => completeTodo(todo.text)}
             onDelete={() => deleteTodo(todo.text)}
           />))}
             </TodoList>
          <CreateTodoButton 
          setOpenModal = {setOpenModal}
          />
          {openModal &&(
            <Modal>
              <TodoForm></TodoForm>
            </Modal>
          )}
        </>);
}

export { AppUI };