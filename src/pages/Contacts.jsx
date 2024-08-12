import React, { useEffect } from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { Box  } from '@mui/material'
import { DataGrid, GridToolbar} from '@mui/x-data-grid'
import { fetchContacts } from '../features/contactSlice'

const Contacts = () => {

  const {loading, data} = useSelector(state => state.contacts)
  const {theme} = useSelector(state => state.theme)
  const dispatch = useDispatch()
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
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
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ];

  useEffect(()=>{
    dispatch(fetchContacts())
  }, [])

  return (loading?(<div>Loading...</div>):(
    <div className="container">
        <div>
          <Header title='CONTACTS' subtitle='List of Contacts for Future Reference'/>
        </div>
        <Box
            m="40px 0 0 0"
            height="70vh"
            sx={{
              "& .MuiDataGrid-root": {
                border: '0 !important',
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
                border: '0 !important',
                color: theme==='light'?'#141414':'#e0e0e0'
              },
              "& .name-column--cell": {
                color: theme==='light'?'#2e7c67':'#94e2cd',
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
              <DataGrid checkboxSelection rows={data} columns={columns} components={{Toolbar: GridToolbar}} />
          </Box>
    </div>)
  )
}

export default Contacts