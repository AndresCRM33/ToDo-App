export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const UPDATE_TODO = "UPDATE_TODO"

export const addTodo = (todo) => dispatch => {
    return dispatch({type: ADD_TODO, payload: todo})
}

export const deleteToDo = (id) => dispatch => {
    return dispatch({type: DELETE_TODO, payload: id})
}

export const updateToDo = (id) => dispatch => {
    return dispatch({type: UPDATE_TODO, payload: id})
}