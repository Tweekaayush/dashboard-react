import {useEffect} from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { Email, PointOfSale, PersonAdd, Traffic, DownloadOutlined } from '@mui/icons-material'
import StatBox from '../components/StatBox'
import ProgressCircle from '../components/ProgressCircle'
import Linechart from '../components/Linechart'
import Barchart from '../components/Barchart'
import { fetchTransactionData } from '../features/transactionSlice'
import { useLocation } from 'react-router-dom'

const Dashboard = ({eleRef}) => {

  const {theme} = useSelector(state => state.theme)
  const {loading, data} = useSelector(state => state.transaction)
  const dispatch = useDispatch()
  const {pathname} = useLocation()

  useEffect(() => {
    if (!eleRef.current) return;
    const resizeObserver = new ResizeObserver(() => { 
      if(pathname !== '/') return
      clearTimeout(eleRef.current)
      setTimeout(()=>{
        const width = eleRef.current.clientWidth
        const dashboardGrid = document.getElementById('dashboard-grid')
        if(width < 806 && width > 500){
          dashboardGrid.classList.add('dashboard-grid-2')
          dashboardGrid.classList.remove('dashboard-grid-3')
          dashboardGrid.classList.remove('dashboard-grid')
        }else if(width < 500){
          dashboardGrid.classList.add('dashboard-grid-3')
          dashboardGrid.classList.remove('dashboard-grid-2')
          dashboardGrid.classList.remove('dashboard-grid')
        }else{
          dashboardGrid.classList.add('dashboard-grid')
          dashboardGrid.classList.remove('dashboard-grid-2')
          dashboardGrid.classList.remove('dashboard-grid-3')
        }
      }, 200)
    });
    resizeObserver.observe(eleRef.current);
    return () => resizeObserver.disconnect();
  }, [eleRef]);

  useEffect(()=>{
    dispatch(fetchTransactionData())
  }, [])

  return (
    <div className="container">
      <div>
        <Header title='DASHBOARD' subtitle='Welcome to your dashboard'/>
      </div>
      <div className="dashboard-grid" id='dashboard-grid'>
        <div className="db-column" style={{gridArea: 'col1'}}>
              <StatBox
                title="12,361"
                subtitle="Emails Sent"
                progress="0.75"
                increase="+14%"
                icon={
                  <Email
                  sx={{ color: theme==='light'?'#70d8bd':'#3da58a', fontSize: "26px" }}
                  />
                }
                />
            </div>
            <div className="db-column" style={{gridArea: 'col2'}}>
                <StatBox
                title="431,225"
                subtitle="Sales Obtained"
                progress="0.50"
                increase="+21%"
                icon={
                  <PointOfSale
                  sx={{ color: theme==='light'?'#70d8bd':'#3da58a', fontSize: "26px" }}
                  />
                }
                />
            </div>
            <div className="db-column" style={{gridArea: 'col3'}}>
              <StatBox
              title="32,441"
              subtitle="New Clients"
              progress="0.30"
              increase="+5%"
              icon={
                <PersonAdd
                sx={{ color: theme==='light'?'#70d8bd':'#3da58a', fontSize: "26px" }}
                />
              }
              />
            </div>
            <div className="db-column" style={{gridArea: 'col4'}}>
              <StatBox
              title="1,325,134"
              subtitle="Traffic Received"
              progress="0.80"
              increase="+43%"
              icon={
                <Traffic
                sx={{ color: theme==='light'?'#70d8bd':'#3da58a', fontSize: "26px" }}
                />
              }
              />
            </div>
            <div className="db-column" style={{gridArea: 'col5'}}>
              <div className='column-header'>
                <div>
                  <h5>
                    Revenue Generated
                  </h5>
                  <h3>
                    $59,342.32
                  </h3>
                </div>
                <div>
                  <DownloadOutlined
                    sx={{ fontSize: "26px", color: '#4cceac' }}
                  />
                </div>
              </div>
              <div className='db-chart-container'>
                <Linechart/>
              </div>
            </div>
            <div className="db-column" style={{gridArea: 'col6'}}>
              <div className="column-header">
                <h5>
                  Recent Transactions
                </h5>
              </div>
              <div className="transaction-list">
                {
                  !loading && data?.map((item, i)=>{
                    return <div key={i} className="transaction-container">
                      <div>
                        <h5> {item.txId} </h5>
                        <h6>{item.user}</h6>
                      </div>
                      <div>
                        <h6>{item.date}</h6>
                      </div>
                      <div>
                        <h6>${item.cost}</h6>
                      </div>
                    </div>
                  })
                }
              </div>
            </div>
            <div className="db-column" style={{gridArea: 'col7'}}>
              <div className="column-header">
                <h5>
                  Campaign
                </h5>
              </div>
              <div className="db-chart-container">
                <ProgressCircle size='100'/>
                <h5>
                $48,352 revenue generated
                </h5>
                <h6>Includes extra misc expenditures and costs</h6>
              </div>
            </div>
            <div className="db-column" style={{gridArea: 'col8'}}>
              <div className="column-header">
                <h5>
                  Sales Quantity
                </h5>
              </div>
              <div className='db-chart-container'>
                <Barchart/>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Dashboard