import React from 'react'
import { TodosProvider } from '../store/context/index';
import ListTodo from '../components/ListTodo'
import AddTodo from '../components/AddTodo';
import FilterList from '../components/FilterList';

const TodoApp = () => {
    return (
        <TodosProvider>
            <ListTodo/>
            <AddTodo/>
            {/* <FilterList/> */}
        </TodosProvider>
    )
}

export default TodoApp