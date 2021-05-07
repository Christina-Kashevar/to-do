import React, {  useRef } from 'react';
import IconButton from '@material-ui/core/IconButton';
import classes from './TodoItemInput.module.css';

type TodoItemProps = {
  text: string,
  id: string,
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
    props.onEdit(props.id, inputRef.current!.value)
  }

    return (
        <div className={classes['input-wrapper']}>
            <input 
                defaultValue={props.text} 
                onBlur={editIconHandler}
                onKeyDown={keyDownHandler}
                ref={inputRef}
            />
            <IconButton onClick={editIconHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
            </IconButton>
        </div>
        )
};

export default TodoItemInput;

