import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { mockTransactions } from "../data/mockData"

const initialState = {
    loading: false,
    data: [],
    error: ''
}

export const fetchTransactionData = createAsyncThunk('fetchTransactionData', async()=>{
    try {
        return mockTransactions        
    } catch (error) {
        return error
    }
})

const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchTransactionData.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(fetchTransactionData.fulfilled, (state, action)=>{
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(fetchTransactionData.rejected, (state, action)=>{
            state.loading = false
            state.error = action.payload
        })
    }
})

export default transactionSlice.reducer