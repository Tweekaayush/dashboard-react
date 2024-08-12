import React from 'react'
import Header from '../components/Header'
import Barchart from '../components/Barchart'

const Bar = () => {
  
  return (
    <div className="container">
        <div>
            <Header title='BAR CHART' subtitle='Simple Bar Chart'/>
        </div>
        <div className="bottom-container">
            <Barchart/>
        </div>
    </div>
  )
}

export default Bar