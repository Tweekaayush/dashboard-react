import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchChartData } from '../features/chartSlice'
import { BarChart } from '@mui/x-charts/BarChart'
import { ChartContainer } from '@mui/x-charts';

const Barchart = () => {

  const {theme} = useSelector(state=>state.theme)
  const {data} = useSelector( state => state.chart)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchChartData())
  }, [])

  return (
        <BarChart
        series={data?.barData}
        xAxis={[{ data: ['AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM'], scaleType: 'band' }]}
        slotProps={{
            legend: {
                labelStyle: {
                    fontSize: 14,
                    fill: theme==='light'?'#141414':'#e0e0e0',
                },
            },
        }}
        sx={{
           "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel":{
            strokeWidth:"0.4",
            fill:theme==='light'?'#141414':'#e0e0e0'
           },
           "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel":{
               fontFamily: "Source Sans 3",
            },
            "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel":{
                strokeWidth:"0.5",
                fill:theme==='light'?'#141414':'#e0e0e0'
             },
             "& .MuiChartsAxis-bottom .MuiChartsAxis-line":{
              stroke:theme==='light'?'#141414':'#e0e0e0',
              strokeWidth:0.4
             },
             "& .MuiChartsAxis-left .MuiChartsAxis-line":{
              stroke:theme==='light'?'#141414':'#e0e0e0',
              strokeWidth:0.4
             }
          }}
        />
  )
}

export default Barchart