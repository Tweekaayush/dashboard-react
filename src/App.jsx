import { lazy, useRef, Suspense, useState, useEffect } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Topbar from './components/Layout/Topbar'
import Sidebar from './components/Layout/Sidebar'
import Loader from './components/Loader'
import Footer from './components/Layout/Footer'
import { useDispatch } from 'react-redux'
import { fetchNotifications } from './features/notificationsSlice'

const Dashboard = lazy(() => import('./pages/Dashboard'))
const Calendar = lazy(() => import('./pages/Calendar'))
const Bar = lazy(() => import('./pages/Bar'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Invoice = lazy(() => import('./pages/Invoice'))
const Team= lazy(() => import('./pages/Team'))
const Pie = lazy(() => import('./pages/Pie'))
const Line = lazy(() => import('./pages/Line'))
const Form = lazy(() => import('./pages/Form'))
const Contacts = lazy(() => import('./pages/Contacts'))
const Settings = lazy(() => import('./pages/Settings'))

const App = () => {

  const ref = useRef(0)
  const [toggle, setToggle] = useState(false)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(window.innerWidth < 800)
      setToggle(true)
    dispatch(fetchNotifications())
  },[])

  return (
    <Router>
      <Topbar toggle={toggle} setToggle={setToggle}/>
      <Sidebar toggle={toggle} setToggle={setToggle}/>
      <div id="app" ref={ref}>
        <Suspense fallback={<Loader />}> 
          <Routes>
            <Route exact path='/' element={<Dashboard eleRef={ref}/>}/>
            <Route exact path='/*' element={<Navigate to="/" replace={true} />}/>
            <Route exact path='/team' element={<Team/>}/>
            <Route exact path='/contacts' element={<Contacts/>}/>
            <Route exact path='/invoices' element={<Invoice/>}/>
            <Route exact path='/form' element={<Form/>}/>
            <Route exact path='/calendar' element={<Calendar eleRef={ref}/>}/>
            <Route exact path='/bar' element={<Bar/>}/>
            <Route exact path='/faq' element={<FAQ/>}/>
            <Route exact path='/pie' element={<Pie/>}/>
            <Route exact path='/line' element={<Line/>}/>
            <Route exact path='/settings' element={<Settings/>}/>
          </Routes>
        </Suspense>
        <Footer/>
      </div>
    </Router>
  )
}

export default App