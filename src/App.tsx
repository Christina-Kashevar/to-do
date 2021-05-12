import React, { useState, useEffect} from 'react';
import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';
import Header from './components/Header';
import { useTranslation } from 'react-i18next';
import classes from './App.module.css';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const { t } = useTranslation();

  useEffect(() => {
    const personTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(personTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodoHandler = (text: string) => {
    setTodos((prevState) => [new Todo(text), ...prevState])
  };

  const deleteTodoHandler = (id: string) => {
    setTodos((prevState) => prevState.filter( el => el.id !== id))
  };

  const editTodoHandler= (id: string, newText: string) => {
    setTodos((prevState) => prevState.map(el => el.id === id ? {...el, text: newText} : el))
  };

  const completeToggle =( id: string) => {
    setTodos((prevState) => prevState.map(el => el.id === id ? {...el, isComplete: !el.isComplete} : el))
  };

  const isAnyTodos = todos.length;

  return (
    <React.Fragment>
      <Header />
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} onDelete={deleteTodoHandler} onEdit={editTodoHandler} onComplete={completeToggle }/>
      {!isAnyTodos && <p className={classes.text}>{t('NO_TASK')}</p>}
    </React.Fragment>
  );
}

export default App;
