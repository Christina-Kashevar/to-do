import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import Todo from '../models/todo';
import classes from './TodoItemText.module.css';

type TodoItemTextProps = {
  todo: Todo,
  onDelete: () => void,
  editableToggle: () => void,
  onComplete: () => void
}

const TodoItemText: React.FC<TodoItemTextProps> = (props) => {
    const editHandler = () => {
        props.editableToggle()
    };

    const completeHandler = () => {
        props.onComplete()
    };

    return (
        <div className={classes.item}>
            <IconButton onClick={completeHandler}>
                {props.todo.isComplete ? <CheckCircleOutlineIcon/>: <RadioButtonUncheckedIcon/>}
            </IconButton>
            <li style={{ textDecoration: `${props.todo.isComplete ? 'line-through' : ''}` }}>{props.todo.text}</li>
            <div className={classes.icons}>
                <IconButton onClick={editHandler}>
                    <EditIcon/>
                </IconButton>
                <IconButton onClick={props.onDelete}>
                    <DeleteIcon/>
                </IconButton>
           </div>
        </div>
     )
};

export default TodoItemText;