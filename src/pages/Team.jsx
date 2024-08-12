import React, { useEffect } from 'react'
import Header from '../components/Header'
import { DataGrid} from '@mui/x-data-grid'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTeams } from '../features/teamSlice'
import { AdminPanelSettingsOutlined, SecurityOutlined, LockOpenOutlined } from '@mui/icons-material'
import { Box } from '@mui/material'

const Team = () => {
  const {loading, data} = useSelector(state => state.teams)
  const {theme} = useSelector(state => state.theme)
  const dispatch = useDispatch()
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <div
            className='team-table-cell'
            style={{
              backgroundColor: theme === 'light'? (access === "admin"
                ? '#70d8bd'
                : access === "manager"
                ? '#94e2cd'
                : '#94e2cd'): (access === "admin"
                  ? '#3da58a'
                  : access === "manager"
                  ? '#2e7c67'
                  : '#2e7c67'), cursor: 'pointer'
            }}
          >
            {access === "admin" && <AdminPanelSettingsOutlined />}
            {access === "manager" && <SecurityOutlined />}
            {access === "user" && <LockOpenOutlined />}
            <h5>
              {access}
            </h5>
          </div>
        );
      },
    },
  ];
  useEffect(()=>{
    dispatch(fetchTeams())
  },[])

  return loading?(<div>Loading...</div>):(

        <div className="container">
          <div>
            <Header title='TEAM' subtitle='Managing the Team Members'/>
          </div>
          <Box
            m="40px 0 0 0"
            height="70vh"
            sx={{
              "& .MuiDataGrid-root": {
                border: '0 !important',
              },
              "& .MuiDataGrid-cell": {
                border: '0 !important',
                color: theme==='light'?'#141414':'#e0e0e0'
              },
              "& .name-column--cell": {
                color: theme==='light'?'#2e7c67':'#94e2cd',
                border: '0 !important',
              },
              "& .MuiDataGrid-columnHeaders": {
                border: '0 !important',
              },
              "& .MuiDataGrid-columnHeader": {
                backgroundColor: theme==='light'?'#a4a9fc':'#3e4396',
                border: '0 !important',
                color: theme==='light'?'#141414':'#e0e0e0'
              },
              "& .MuiDataGrid-virtualScroller": {
                border: '0 !important',
                backgroundColor: theme==='light'?'#f2f0f0':'#1F2A40'
              },
              "& .css-1jlz3st": {
                border: '0 !important',
              },
              "& .MuiDataGrid-footerContainer": {
                border: '0 !important',
                backgroundColor: theme==='light'?'#a4a9fc':'#3e4396',
              },
              "& .MuiCheckbox-root": {
                border: '0 !important',
                color: `${theme==='light'?'#1e5245':'#b7ebde'} !important`,
              },
              "& .MuiDataGrid-row": {
                border: '0 !important',
              },
            }}
          >
              <DataGrid checkboxSelection rows={data} columns={columns} />
          </Box>
        </div>
      )
}

export default Team