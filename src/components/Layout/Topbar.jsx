import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {LightModeOutlined, DarkModeOutlined, NotificationsOutlined, SettingsOutlined, PersonOutlined} from '@mui/icons-material'
import { changeTheme } from '../../features/themeSlice'



const Topbar = () => {

  const {theme} = useSelector(state=>state.theme)
  const [toggle, setToggle] = useState(false)
  const dispatch = useDispatch()

  const toggleSidebar = () =>{
    if(!toggle){
      document.getElementById('sidebar').classList.add('sidebar-active')
      document.getElementById('app').classList.add('container-active')
    }
    else{
      document.getElementById('sidebar').classList.remove('sidebar-active')
      document.getElementById('app').classList.remove('container-active')
    } 

    setToggle(!toggle)
  }

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <nav className="navbar">
        <div className="nav-left">
            <div className="nav-brand">
              <h2>Admin Dashboard</h2>
            </div>
            <div className="nav-options">
              <div className="hamburger" onClick={toggleSidebar}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
              {/* <SearchBar/> */}
            </div>
        </div>        
        <div className="nav-right">
          <ul className="nav-list">
            <li className="nav-list-item" onClick={()=>dispatch(changeTheme())}>
              {theme === 'dark'? <DarkModeOutlined/>:<LightModeOutlined/>}
            </li>
            <li className="nav-list-item">
              <NotificationsOutlined/>
            </li>
            <li className="nav-list-item">
              <SettingsOutlined/>
            </li>
            <li className="nav-list-item">
              <PersonOutlined/>
            </li>
          </ul>
        </div>        
    </nav>
  )
}

export default Topbar