import React, {useState, useContext} from 'react'
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { Menu } from '@headlessui/react'
import { HouseContext } from './HouseContext'
import '../components/CountryDropdown.css'

const CountryDropdown = () => {
  const {country, setCountry, countries} = useContext(HouseContext)
  
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Menu as='div' className='dropdown'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-menu-button'>
        <RiMapPinLine className='dropdown-map-icon'/>
        <div>
          <div className='dropdown-country'>{country}</div>
          <div className='dropdown-text'>Select your place</div>
        </div>
          {
            isOpen ? (
              <RiArrowUpSLine className='dropdown-arrow-icon'/>
            ) : (
              <RiArrowDownSLine className='dropdown-arrow-icon'/>
            )
          }
      </Menu.Button>

      <Menu.Items className='dropdown-items'>
        {countries.map((country, index) => {
          return (
            <Menu.Item onClick={() => setCountry(country)} className='dropdown-menu' as='li' key={index}>{country}</Menu.Item>
          )
        })}
      </Menu.Items>

    </Menu>
  )
}

export default CountryDropdown