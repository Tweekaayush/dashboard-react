import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInvoices } from '../features/invoiceSlice'

const Invoices = () => {

  const {loading, data} = useSelector(state => state.invoices)
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
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <h5 style={{color: '#4cceac'}}>
          ${params.row.cost}
        </h5>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  useEffect(()=>{
    dispatch(fetchInvoices())
  }, [])

  return ( loading?(<div>Loading...</div>):(
    <div className="container">
        <div>
          <Header title='Invoices' subtitle='List of Invoice Balances'/>
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
    </div>)
  )
}

export default Invoices