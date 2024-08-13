import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: localStorage.getItem('theme') || 'dark'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state, action) =>{
            if(action.payload) state.theme = action.payload
            else state.theme = state.theme === 'dark' ? 'light': 'dark'
            localStorage.setItem('theme', state.theme)
        }
    }
})

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer