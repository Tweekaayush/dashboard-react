import React from 'react'
import Header from '../components/Header'
import Linechart from '../components/Linechart'

const Line = () => {
  return (
    <div className="container">
        <div>
            <Header title='LINE CHART' subtitle='Simple Line Chart'/>
        </div>
        <div className="bottom-container">
            <Linechart/>
        </div>
    </div>
  )
}

export default Line