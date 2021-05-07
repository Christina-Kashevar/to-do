import React, { useState } from 'react';
import TodoItemTextProps from './TodoItemText';
import TodoItemInput from './TodoItemInput';

type TodoItemProps = {
  text: string,
  id: string,
  onDelete: () => void,
  onEdit: (id: string, text: string) => void
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
            <TodoItemTextProps text={props.text} id={props.id} onDelete={props.onDelete} editableToggle={editableToggle}/>
           :
            <TodoItemInput text={props.text} id={props.id} changeEditable={editableHandler} onEdit={props.onEdit}/>            
          }

        </React.Fragment>
        )
};

export default TodoItem;

