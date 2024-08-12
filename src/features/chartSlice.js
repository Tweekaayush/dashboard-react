import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { mockBarData, mockLineData, mockPieData } from '../data/mockData'

const initialState = {
    loading: false,
    data: {
        barData: [],
        lineData: [],
        pieData: [],
    },
    error: ''
}

export const fetchChartData = createAsyncThunk('fetchChartData', async ()=>{
    try{
        const response = {
            barData: mockBarData,
            lineData: mockLineData,
            pieData: mockPieData,
        }
        return response
    }catch(error){
        return error
    }
})

const chartSlice = createSlice({
    name: 'chart',
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(fetchChartData.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(fetchChartData.fulfilled, (state, action)=>{
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(fetchChartData.rejected, (state, action)=>{
            state.loading = false
            state.error = action.payload
        })

    }
})

export default chartSlice.reducer