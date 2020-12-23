import React from 'react'
import { TodosProvider } from '../store/context/index';
import ListTodo from '../components/ListTodo'
import AddTodo from '../components/AddTodo';

const TodoApp = () => {
    return (
        <TodosProvider>
            <ListTodo/>
            <AddTodo/>
        </TodosProvider>
    )
}

export default TodoApp