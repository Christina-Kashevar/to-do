import React, { useState } from 'react';
import TodoItemText from './TodoItemText';
import TodoItemInput from './TodoItemInput';
import Todo from '../models/todo';

type TodoItemProps = {
  todo: Todo,
  onDelete: () => void,
  onEdit: (id: string, text: string) => void,
  onComplete: () => void,
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const [isEditable, setIsEditable] = useState(false);

  const editableToggle = () => {
    setIsEditable((prevState) => !prevState)
  };

  const editableHandler = () => {
    setIsEditable(false)
  }

    return (
        <React.Fragment>
          { !isEditable ? 
            <TodoItemText todo={props.todo} onDelete={props.onDelete} editableToggle={editableToggle} onComplete={props.onComplete}/>
           :
            <TodoItemInput todo={props.todo} changeEditable={editableHandler} onEdit={props.onEdit}/>            
          }

        </React.Fragment>
        )
};

export default TodoItem;

