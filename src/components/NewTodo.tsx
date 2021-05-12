import {useRef} from 'react';
import { useTranslation } from 'react-i18next';
import classes from './NewTodo.module.css';

const NewTodo: React.FC<{onAddTodo: (test: string) => void}> = (props) => {
    const todoInputRef = useRef<HTMLInputElement>(null);

    const { t } = useTranslation();

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
            <label htmlFor='todoInput'>{t('ENTER_TASK')}</label>
            <input type='text' id='todoInput' ref={todoInputRef} placeholder={t('TASK_NAME')}/>
            <button>{t('SAVE')}</button>
        </form>
    )
};

export default NewTodo;