import React from 'react'
import Header from '../components/Header'
import {useDispatch, useSelector} from 'react-redux'
import { changeTheme } from '../features/themeSlice'
import { changeActiveStatus } from '../features/notificationsSlice'
import lighttheme from '../assets/lightmode.png'
import darktheme from '../assets/darkmode.png'

const Settings = () => {
  const {theme} = useSelector(state => state.theme)
  const {active} = useSelector(state=> state.notifications)
  const dispatch = useDispatch()
  return (
    <div className="container">
        <div>
            <Header title='General Settings' subtitle={'Customize until match to your workflows'}/>
        </div>
        <div className="settings-container">
          <div className="s-preferences">
            <h2>
              Preferences
            </h2>
            <hr/>
            <h4>Select theme</h4>
            <div className='theme-selector'>
              <div className={theme==='light'?'theme-active': ''} onClick={()=>dispatch(changeTheme('light'))}>
                <img src={lighttheme} alt="lighttheme" />
                <h5>
                  Light Mode {theme ==='light'?'(Active)':''}
                </h5>
              </div>
              <div className={theme==='dark'?'theme-active': ''} onClick={()=>dispatch(changeTheme('dark'))}>
                <img src={darktheme} alt="darktheme" />
                <h5>
                  Dark Mode {theme ==='dark'?'(Active)':''}
                </h5>
              </div>
            </div>
          </div>
          <div className="s-notifications">
            <h2>Notifications</h2>
            <hr />
            <div>
              <h4>Turn on Notifications? </h4>
              <div className={active?'slider': 'slider slider-disabled'} onClick={()=>dispatch(changeActiveStatus())}>
                <span></span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Settings