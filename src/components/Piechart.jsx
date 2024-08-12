import React, { useEffect } from 'react'
import { PieChart } from '@mui/x-charts'
import { useDispatch, useSelector } from 'react-redux'
import { fetchChartData } from '../features/chartSlice'

const Piechart = () => {
  const {data} = useSelector(state => state.chart)
  const {theme } = useSelector(state => state.theme)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchChartData())
  },[])

  return <PieChart
            series={[
                {
                data: data?.pieData,
                },
            ]}
            slotProps={{
                legend: {
                    labelStyle: {
                        fontSize: 14,
                        fill: theme==='light'?'#141414':'#e0e0e0',
                    },
                },
            }}
        />
}

export default Piechart