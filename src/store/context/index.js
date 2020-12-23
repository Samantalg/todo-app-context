import React, { useReducer } from 'react'
import todosReducer from '../reducers'

export const Context = React.createContext()
export const Dispatch = React.createContext()

const initialState = [
    { id: 0, text: 'Tarea 1', completed: false },
    { id: 1, text: 'Tarea 2', completed: true },
    { id: 2, text: 'Tarea 3', completed: false }
]

export function TodosProvider(props) {
    const [todos, dispatch] = useReducer(todosReducer, initialState)
    console.log('todos', todos)
    console.log('dispatch', dispatch)

    return (
        <Context.Provider value={todos}>
            <Dispatch.Provider value={dispatch}>
                {props.children}
            </Dispatch.Provider>
        </Context.Provider>
    )
}
