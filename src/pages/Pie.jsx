import React from 'react'
import Header from '../components/Header'
import Piechart from '../components/Piechart'

const Pie = () => {
  return (
        <div className="container">
            <div>
                <Header title='PIE CHART' subtitle='Simple Pie Chart'/>
            </div>
            <div className='bottom-container'>
                <Piechart/>
            </div>
        </div>
  )
}

export default Pie