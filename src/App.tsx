import {useState} from 'react';
import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';
import classes from './App.module.css';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos((prevState) => [new Todo(text), ...prevState])
  };

  const deleteTodoHandler = (id: string) => {
    setTodos((prevState) => prevState.filter( el => el.id !== id))
  }

  const isAnyTodos = todos.length

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} onClick={deleteTodoHandler}/>
      {!isAnyTodos && <p className={classes.text}>Пока нет задач.</p>}
    </div>
  );
}

export default App;
