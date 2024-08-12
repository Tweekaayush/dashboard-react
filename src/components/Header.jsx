import React from 'react'

const Header = ({title, subtitle}) => {
  return (
    <div className="header-container">
        <h2>
            {title}
        </h2>
        <h5>
            {subtitle}
        </h5>
    </div>
  )
}

export default Header