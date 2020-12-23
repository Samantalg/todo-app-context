import React, { useContext } from 'react';
import { Dispatch, Context } from '../store/context/index';
import useInputState from '../hooks/useInputState';
import { ADD_TODO } from '../store/actions.js';

const AddTodo = () => {
    const dispatch = useContext(Dispatch);
    const todos = useContext(Context);

    const [value, handleChange, clearValue] = useInputState('');
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                dispatch({ type: ADD_TODO, text: value, id: todos.length });
                clearValue();
            }}
        >
            <input
                placeholder="Añade tu tarea"
                value={value}
                onChange={handleChange}
            />
        </form>
    )
}

export default AddTodo