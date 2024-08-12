import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { mockDataContacts} from "../data/mockData"

export const fetchContacts = createAsyncThunk('fetchContacts', async ()=>{
    try {
        return mockDataContacts
    } catch (error) {
        return error   
    }
})

const initialState = {
    loading: false,
    data: [],
    error: ''
}

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(fetchContacts.pending, (state) =>{
            state.loading = true
        })
        builder.addCase(fetchContacts.fulfilled, (state, action)=>{
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(fetchContacts.rejected, (state, action)=>{
            state.loading = false
            state.error = action.payload
        })
    }
})

export default contactSlice.reducer