import React, {  useRef } from 'react';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import Todo from '../models/todo';
import classes from './TodoItemInput.module.css';

type TodoItemProps = {
  todo: Todo,
  changeEditable: ()=> void,
  onEdit: (id: string, text: string) => void
}

const TodoItemInput: React.FC<TodoItemProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const keyDownHandler = (e:React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      editIconHandler(e)
    }
  };

  const editIconHandler = (e:React.MouseEvent | React.FocusEvent | React.KeyboardEvent) => {
    props.changeEditable();
    props.onEdit(props.todo.id, inputRef.current!.value)
  }

    return (
        <div className={classes['input-wrapper']}>
            <input 
                defaultValue={props.todo.text} 
                onBlur={editIconHandler}
                onKeyDown={keyDownHandler}
                ref={inputRef}
            />
            <IconButton onClick={editIconHandler}>
                <CheckIcon/>
            </IconButton>
        </div>
        )
};

export default TodoItemInput;

