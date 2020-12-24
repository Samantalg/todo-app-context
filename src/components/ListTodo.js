import React, { useContext } from 'react'
import { Context, Dispatch } from '../store/context/index'
import Todo from './Todo';
import { TOGGLE_TODO } from '../store/actions.js'

const ListTodo = () => {
  const todos = useContext(Context);
  const dispatch = useContext(Dispatch);
  
  const onToggle = (id) => {
    console.log('onToggle', id);
    dispatch({ type: TOGGLE_TODO, id: id });
    
  }

  return (
    <ul style={{ paddingLeft: 10, width: '95%' }}>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          text={todo.text}
          id={todo.id}
          completed={todo.completed}
          onToggle={onToggle} />
      ))}
    </ul>
  )
}

export default ListTodo
