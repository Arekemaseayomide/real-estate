import React, { useContext } from 'react'
import CountryDropdown from './CountryDropdown'
import PropertyDropdown from './PropertyDropdown'
import PriceRangeDropdown from './PriceRangeDropdown'
import { RiSearch2Line } from 'react-icons/ri'
import '../components/Search.css'
import { HouseContext } from './HouseContext'

const Search = () => {

  const {handleClick} = useContext(HouseContext)

  return (
    <div className='search-first'>
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button onClick={ ()=> handleClick()} className='search-button'>
        <RiSearch2Line />
      </button>
    </div>
  )
}

export default Search