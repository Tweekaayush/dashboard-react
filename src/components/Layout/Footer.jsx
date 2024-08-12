import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Footer = () => {
  
  const {pathname} = useLocation()
  const [year, setYear] = useState('')

  useEffect(()=>{
    const getYear = () =>{
        const year = new Date().getFullYear()
        setYear(year)
    }
    getYear()

  }, [pathname])

  return (
    <footer>
        <span> &copy; {year}  Aayush Dobriyal</span>
    </footer>
  )
}

export default Footer