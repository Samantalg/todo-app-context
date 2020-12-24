import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actions'

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: action.id, text: action.text, completed: false }]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.id) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    case SET_VISIBILITY_FILTER:
      return getVisibleTodos(state, action.filter)
    default:
      break
  }
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      return todos
  }
}

export default reducer