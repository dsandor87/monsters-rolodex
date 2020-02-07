import React from 'react'
import './search-box.styles.css';




export const SearchBox = ({placeholder, hanleChange }) => (
  <input className='search' type='search'
  placeholder={placeholder}
        onChange={hanleChange}/>

  
)