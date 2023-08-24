import React, { useContext } from 'react'
import {HouseContext} from './HouseContext'
import House from './House'
import { Link } from 'react-router-dom'
import { ImSpinner2 } from 'react-icons/im'
import './HouseList.css'

const HouseList = () => {

    const {houses, loading} = useContext(HouseContext)

    if (loading) {
        return (<ImSpinner2  className='house-spinner'/>)
    }

    if (houses.length < 1) {
        return <div className='house-message'>Sorry, nothing found</div>
    }

  return (
    <section className='houselist'>
        <div className='house'>
            <div className='houselist-1'>{houses.map((house, index)=> {
                return (
                    <Link to={`/property/${house.id}`} key={index} className='houses'>
                        <House house={house}/>
                    </Link>
                )
            })}</div>
        </div>
    </section>
  )
}

export default HouseList