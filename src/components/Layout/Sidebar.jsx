import React from 'react'
import {HomeOutlined, PeopleOutlined, ContactsOutlined, ReceiptOutlined, PersonOutlined, CalendarTodayOutlined, HelpOutlineOutlined, BarChartOutlined, PieChartOutlined, MapOutlined, TimelineOutlined} from "@mui/icons-material";
import { useLocation, useNavigate } from 'react-router-dom';

const Item = ({icons, url, selected, title}) =>{
  const navigate = useNavigate()
  return <li className={selected?'sidebar-list-item sidebar-list-item-active':'sidebar-list-item' } onClick={()=>navigate(url)}>
      <span>
        {icons}
      </span>
      <h4>
        {title}
      </h4>
  </li>
}

const Sidebar = () => {

  const {pathname} = useLocation()

  return (
    <div className="sidebar" id='sidebar'>
      <ul className="sidebar-list">
      <Item 
          title='Dashboard'
          selected={pathname === '/'}
          url='/'
          icons={<HomeOutlined/>}
      />
      <h5>Data</h5>
      <Item 
          title='Manage Team'
          selected={pathname === '/team'}
          url='/team'
          icons={<PeopleOutlined/>}
      />
      <Item 
          title='Contacts Information'
          selected={pathname === '/contacts'}
          url='/contacts'
          icons={<ContactsOutlined/>}
      />
      <Item 
          title='Invoices Balances'
          selected={pathname === '/invoices'}
          url='/invoices'
          icons={<ReceiptOutlined/>}
      />
      <h5>Pages</h5>
      <Item 
          title='Profile Form'
          selected={pathname === '/form'}
          url='/form'
          icons={<PersonOutlined/>}
      />
      <Item 
          title='Calendar'
          selected={pathname === '/calendar'}
          url='/calendar'
          icons={<CalendarTodayOutlined/>}
      />
      <Item 
          title='FAQ Page'
          selected={pathname === '/faq'}
          url='/faq'
          icons={<HelpOutlineOutlined/>}
      />
      <h5>Charts</h5>
      <Item 
          title='Bar Chart'
          selected={pathname === '/bar'}
          url='/bar'
          icons={<BarChartOutlined/>}
      />
      <Item 
          title='Pie Chart'
          selected={pathname === '/pie'}
          url='/pie'
          icons={<PieChartOutlined/>}
      />
      <Item 
          title='Line Chart'
          selected={pathname === '/line'}
          url='/line'
          icons={<TimelineOutlined/>}
      />
      </ul>
    </div>
  )
}

export default Sidebar