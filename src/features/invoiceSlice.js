import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { mockDataInvoices } from "../data/mockData"

export const fetchInvoices = createAsyncThunk('fetchInvoices', async ()=>{
    try {
        return mockDataInvoices
    } catch (error) {
        return error   
    }
})

const initialState = {
    loading: false,
    data: [],
    error: ''
}

const invoiceSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(fetchInvoices.pending, (state) =>{
            state.loading = true
        })
        builder.addCase(fetchInvoices.fulfilled, (state, action)=>{
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(fetchInvoices.rejected, (state, action)=>{
            state.loading = false
            state.error = action.payload
        })
    }
})

export default invoiceSlice.reducer