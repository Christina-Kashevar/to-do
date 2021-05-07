import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

const Todos: React.FC<{items: Todo[], onClick: (id: string) => void}> = (props) => {
  return (
    <ul className={classes.list}>
      {props.items.map(item => (
          <TodoItem key={item.id} text={item.text} onClick={() => props.onClick(item.id)}/>
      ))}
    </ul>
  );
};

export default Todos;
