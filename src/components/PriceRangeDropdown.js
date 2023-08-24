import React, {useState, useContext} from 'react'
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { Menu } from '@headlessui/react'
import { HouseContext } from './HouseContext'
import '../components/CountryDropdown.css'

const PriceRangeDropdown = () => {
  const {price, setPrice} = useContext(HouseContext)

  const [isOpen, setIsOpen] = useState(false)

  const prices = [
    {
      value: 'Price range (any)'
    },
    {
      value: '100000 - 130000'
    },
    {
      value: '130000 - 160000'
    },
    {
      value: '160000 - 190000'
    },
    {
      value: '190000 - 220000'
    },
    {
      value: '10000 - 30000'
    },
    {
      value: '30000 - 40000'
    }
  ]

  return (
    <Menu as='div' className='dropdown'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-menu-button'>
        <RiWallet3Line className='dropdown-map-icon'/>
        <div>
          <div className='dropdown-country'>{price}</div>
          <div className='dropdown-text'>Choose price range</div>
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
        {prices.map((price, index) => {
          return (
            <Menu.Item onClick={() => setPrice(price.value)} className='dropdown-menu' as='li' key={index}>{price.value}</Menu.Item>
          )
        })}
      </Menu.Items>

    </Menu>
  )
}

export default PriceRangeDropdown