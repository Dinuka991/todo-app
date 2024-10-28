// Action types

// Actions are  plain JavaScript objects. The functions here (action creators) are just a way to create these plain objects consistently across your app.
//  They provide an organized and reusable way to create actions for dispatching to the Redux store.

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

// Action creator
export const addTod = (text) => ({
    type: ADD_TODO,
    payload: text
})

export const deleteTodo = ( id ) => ({
    type: DELETE_TODO,
    payload: id,
});

export const toggleTodo = ( id ) => ({
    type: TOGGLE_TODO,
    payload: id,
});



