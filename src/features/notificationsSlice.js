import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    active: true,
    data: [],
    error: ''
}

export const fetchNotifications = createAsyncThunk('fetchNotifications', async()=>{
        return [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, explicabo.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, explicabo.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, explicabo.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, explicabo.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, explicabo.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, explicabo.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, explicabo.',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, explicabo.',    
          ]
})

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers:{
        changeActiveStatus: (state)=>{
            state.active = state.active?false:true
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchNotifications.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(fetchNotifications.fulfilled, (state, action)=>{
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(fetchNotifications.rejected, (state, action)=>{
            state.loading = false
            state.error = action.payload
        })
    }

})

export const {changeActiveStatus} = notificationSlice.actions

export default notificationSlice.reducer