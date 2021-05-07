import IconButton from '@material-ui/core/IconButton';

import React from 'react';
import classes from './TodoItem.module.css';


const TodoItem: React.FC<{text: string, onClick: () => void}> = (props) => {
    return (
        <div className={classes.item}>
          <li>{props.text}</li>
          <IconButton onClick={props.onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
           </IconButton>
        </div>
        )
};

export default TodoItem;

