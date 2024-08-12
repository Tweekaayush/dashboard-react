import React from 'react'
import { useSelector } from 'react-redux'
import ProgressCircle from './ProgressCircle'

const StatBox = ({title, subtitle, icon, increase}) => {

    return (
    <div className="statbox-container">
        <div>
            <div>
                {icon}
                <h4>
                    {title}
                </h4>
            </div>
            <div>
                <ProgressCircle/>
            </div>
        </div>
        <div>
            <h5>
                {subtitle}
            </h5>
            <h5 style={{fontStyle: 'italic'}}>
                {increase}
            </h5>
        </div>
    </div>
    )
}

export default StatBox