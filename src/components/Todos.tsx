import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

type TodosProps = {
  items: Todo[],
  onDelete: (id: string) => void,
  onEdit: (id: string, text: string) => void,
  onComplete: (id: string) => void,
}

const Todos: React.FC<TodosProps> = (props) => {
  return (
    <ul className={classes.list}>
      {props.items.map(item => (
          <TodoItem 
           key={item.id}  
           todo={item}
           onDelete={() => props.onDelete(item.id)} 
           onComplete={() => props.onComplete(item.id)} 
           onEdit={props.onEdit}
           />
      ))}
    </ul>
  );
};

export default Todos;
