import React, { useEffect } from 'react'
import {HomeOutlined, PeopleOutlined, ContactsOutlined, ReceiptOutlined, PersonOutlined, CalendarTodayOutlined, HelpOutlineOutlined, BarChartOutlined, PieChartOutlined, TimelineOutlined} from "@mui/icons-material";
import { useLocation, useNavigate } from 'react-router-dom';

const Item = ({icons, url, selected, title, setToggle}) =>{

  const navigate = useNavigate()

  const handleClick = () =>{
    if(window.innerWidth < 800) setToggle(true)
    navigate(url)
  }

  return <li className={selected?'sidebar-list-item sidebar-list-item-active':'sidebar-list-item' } onClick={handleClick}>
      <span>
        {icons}
      </span>
      <h4>
        {title}
      </h4>
  </li>
}

const Sidebar = ({toggle, setToggle}) => {

  const {pathname} = useLocation()
  
  useEffect(()=>{
    if(!toggle){
      document.getElementById('sidebar').classList.add('sidebar-active')
      document.getElementById('app').classList.add('container-active')
    }
    else{
      document.getElementById('sidebar').classList.remove('sidebar-active')
      document.getElementById('app').classList.remove('container-active')
    } 
  }, [toggle])

  return (
    <div className="sidebar" id='sidebar'>
      <ul className="sidebar-list">
      <Item 
          title='Dashboard'
          selected={pathname === '/'}
          url='/'
          icons={<HomeOutlined/>}
          toggle={toggle}
          setToggle={setToggle}
      />
      <h5>Data</h5>
      <Item 
          title='Manage Team'
          selected={pathname === '/team'}
          url='/team'
          icons={<PeopleOutlined/>}
          toggle={toggle}
          setToggle={setToggle}
      />
      <Item 
          title='Contacts Information'
          selected={pathname === '/contacts'}
          url='/contacts'
          icons={<ContactsOutlined/>}
          toggle={toggle}
          setToggle={setToggle}
      />
      <Item 
          title='Invoices Balances'
          selected={pathname === '/invoices'}
          url='/invoices'
          icons={<ReceiptOutlined/>}
          toggle={toggle}
          setToggle={setToggle}
      />
      <h5>Pages</h5>
      <Item 
          title='Profile Form'
          selected={pathname === '/form'}
          url='/form'
          icons={<PersonOutlined/>}
          toggle={toggle}
          setToggle={setToggle}
      />
      <Item 
          title='Calendar'
          selected={pathname === '/calendar'}
          url='/calendar'
          icons={<CalendarTodayOutlined/>}
          toggle={toggle}
          setToggle={setToggle}
      />
      <Item 
          title='FAQ Page'
          selected={pathname === '/faq'}
          url='/faq'
          icons={<HelpOutlineOutlined/>}
          toggle={toggle}
          setToggle={setToggle}
      />
      <h5>Charts</h5>
      <Item 
          title='Bar Chart'
          selected={pathname === '/bar'}
          url='/bar'
          icons={<BarChartOutlined/>}
          toggle={toggle}
          setToggle={setToggle}
      />
      <Item 
          title='Pie Chart'
          selected={pathname === '/pie'}
          url='/pie'
          icons={<PieChartOutlined/>}
          toggle={toggle}
          setToggle={setToggle}
      />
      <Item 
          title='Line Chart'
          selected={pathname === '/line'}
          url='/line'
          icons={<TimelineOutlined/>}
          toggle={toggle}
          setToggle={setToggle}
      />
      </ul>
    </div>
  )
}

export default Sidebar