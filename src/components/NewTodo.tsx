import {useRef} from 'react';
import classes from './NewTodo.module.css';

const NewTodo: React.FC<{onAddTodo: (test: string) => void}> = (props) => {
    const todoInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e:React.FormEvent)=> {
        e.preventDefault();
        const enteredText = todoInputRef.current!.value;

        if(!enteredText.trim().length) {
            return;
        }

        props.onAddTodo(enteredText);
        todoInputRef.current!.value = '';
    }

    return(
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor='todoInput'>Enter your To do</label>
            <input type='text' id='todoInput' ref={todoInputRef}/>
            <button>Save</button>
        </form>
    )
};

export default NewTodo;