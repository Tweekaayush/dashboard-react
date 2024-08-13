import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {LightModeOutlined, DarkModeOutlined, NotificationsOutlined, SettingsOutlined, PersonOutlined} from '@mui/icons-material'
import { changeTheme } from '../../features/themeSlice'
import {useNavigate} from 'react-router-dom'



const Topbar = ({toggle, setToggle}) => {

  const {theme} = useSelector(state=>state.theme)
  const dispatch = useDispatch()
  const [toggleNotification, setToggleNotification] = useState(false)
  const notificationRef = useRef(0)
  const ref = useRef(0)
  const navigate = useNavigate()
  const {active, data} = useSelector(state => state.notifications)

  useEffect(()=>{
    !toggleNotification?notificationRef.current.classList.remove('notifications-box-active'):notificationRef.current.classList.add('notifications-box-active')
  }, [toggleNotification])

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(()=>{
    const handleClickListener = (e) =>{
      if(notificationRef.current && !notificationRef.current.contains(e.target) && !ref.current.contains(e.target)){
        setToggleNotification(false)
      }
    }

    window.addEventListener('click', handleClickListener, true)
    return ()=>{
      window.removeEventListener('click', handleClickListener, true)
    }
  }, [notificationRef])

  return (
    <nav className="navbar">
        <div className="nav-left">
            <div className="nav-brand">
              <h2>Admin Dashboard</h2>
            </div>
            <div className="nav-options">
              <div className="hamburger" onClick={()=>setToggle(!toggle)}>
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
            {active && <li className="nav-list-item" ref={ref} onClick={()=> [setToggleNotification(!toggleNotification), window.innerWidth < 800?setToggle(true):'']}>
              <NotificationsOutlined/>
              <div className="notifications-box" ref={notificationRef}>
                <div className="notifications-header">
                  <h6>Notifications ({data.length})</h6>
                </div>
                <div className="notifications-list">
                  { data && data.map((msg, i)=>{
                    return <span>{i+1}. {msg.substring(0, 15)}...</span>
                  })}  
                </div>
              </div>
            </li>}
            <li className="nav-list-item" onClick={()=>navigate('/settings')}>
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