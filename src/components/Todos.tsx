import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

type TodosProps = {
  items: Todo[],
  onDelete: (id: string) => void,
  onEdit: (id: string, text: string) => void,
}

const Todos: React.FC<TodosProps> = (props) => {
  return (
    <ul className={classes.list}>
      {props.items.map(item => (
          <TodoItem 
           key={item.id} 
           text={item.text} 
           onDelete={() => props.onDelete(item.id)} 
           onEdit={props.onEdit}
           id={item.id}/>
      ))}
    </ul>
  );
};

export default Todos;
