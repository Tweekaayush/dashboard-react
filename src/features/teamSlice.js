import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { mockDataTeam } from "../data/mockData"

export const fetchTeams = createAsyncThunk('fetchTeams', async ()=>{
    try {
        return mockDataTeam
    } catch (error) {
        return error   
    }
})

const initialState = {
    loading: false,
    data: [],
    error: ''
}

const teamSlice = createSlice({
    name: 'teams',
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(fetchTeams.pending, (state) =>{
            state.loading = true
        })
        builder.addCase(fetchTeams.fulfilled, (state, action)=>{
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(fetchTeams.rejected, (state, action)=>{
            state.loading = false
            state.error = action.payload
        })
    }
})

export default teamSlice.reducer