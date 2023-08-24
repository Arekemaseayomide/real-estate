import React, {useState, useContext} from 'react'
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { Menu } from '@headlessui/react'
import { HouseContext } from './HouseContext'
import '../components/CountryDropdown.css'

const PropertyDropdown = () => {
  const {property, setProperty, properties} = useContext(HouseContext)
  


  const [isOpen, setIsOpen] = useState(false)

  return (
    <Menu as='div' className='dropdown'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-menu-button'>
        <RiHome5Line className='dropdown-map-icon'/>
        <div>
          <div className='dropdown-country'>{property}</div>
          <div className='dropdown-text'>Select your type</div>
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
        {properties.map((property, index) => {
          return (
            <Menu.Item onClick={() => setProperty(property)} className='dropdown-menu' as='li' key={index}>{property}</Menu.Item>
          )
        })}
      </Menu.Items>

    </Menu>
  )
}

export default PropertyDropdown