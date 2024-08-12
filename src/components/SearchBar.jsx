import React from 'react'
import {Search} from '@mui/icons-material'

const SearchBar = () => {
  return (
    <div className="search-box">
        <input type="text" placeholder='search here'/>
        <button >
            <Search/>
        </button>
    </div>
  )
}

export default SearchBar