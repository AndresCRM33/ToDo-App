import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions"

const initialState = {
    todoId: 1,
    todoList : []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {...state,
                todoId: state.todoId + 1,
                todoList : [...state.todoList, action.payload],
            }
        case DELETE_TODO:
            const list = state.todoList.filter(t => t.id !== action.payload)
            return {
                ...state,
                todoList: list
            }
        case UPDATE_TODO:
            const listToDo = state.todoList.map(t => t.id === action.payload ? {...t, completed: !t.completed} : t)
            return {
                ...state,
                todoList: listToDo
            }
        default:
            return {...state}
    }
}

export default rootReducer