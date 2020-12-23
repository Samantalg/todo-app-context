import React from 'react'

const Todo = (props) => {
    return (
        <li
            style={{ textDecoration: props.completed ? 'line-through' : 'none' }}
            onClick={e => {
                e.preventDefault();
                props.onToggle(props.id)
            }}>
            {props.text}
        </li>
    )
}

export default Todo
