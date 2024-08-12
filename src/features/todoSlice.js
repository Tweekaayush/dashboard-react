import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos: JSON.parse(localStorage.getItem('todos')) || []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) =>{
            state.todos.push(action.payload)
            localStorage.setItem('todos',JSON.stringify(state.todos))
        },
        deleteTodo: (state, action) =>{

            state.todos = state.todos.filter((todo, i)=> !action.payload.has(todo.id))
            localStorage.setItem('todos',JSON.stringify(state.todos))
        }

    }
})

export const { addTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer