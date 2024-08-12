import React from 'react'
import { Skeleton } from '@mui/material'

const Loader = () => {
  return (
    <div className="container">
        <Skeleton variant='text' sx={{fontSize: '32px'}} width={200} animation="wave"/>
        <Skeleton variant='text' sx={{fontSize: '16px'}} width={300} animation="wave"/>
        <Skeleton variant="rectangular" sx={{width: '100%', height: '75vh', marginTop: '32px'}} animation="wave"/>
    </div>
  )
}

export default Loader