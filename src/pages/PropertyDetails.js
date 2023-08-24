import React from 'react'
import {housesData} from '../data'
import {useParams} from 'react-router-dom'
import { BiBed, BiBath, BiArea } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import '../pages/PropertyDetails.css'

const PropertyDetails = () => {

  const {id} = useParams()

  const house = housesData.find(house => {
    return house.id === parseInt(id)
  })

  return ( <section>
        <div className='property'>
          <div className='property-1'>
            <div>
              <h2 className='property-2'>{house.name}</h2>
              <h3 className='property-3'>{house.address}</h3>
            </div>
              <div className='property-4'>
                <div className='property-5'>{ house.type }</div>
                <div className='property-6'>{ house.country }</div>
              </div>
              <div className='property-7'>${house.price}</div>
          </div>
          <div className='property-8'>
            <div className='property-9'>
              <div className='property-10'>
                <img className='img-1' src={house.imageLg} alt='' />
              </div>
              <div className='property-11'>
                <div className='property-icon-div'>
                  <BiBed className='property-icon' />
                  <div>{house.bedrooms}</div>
                </div>
                <div className='property-icon-div'>
                  <BiBath className='property-icon' />
                  <div>{house.bathrooms}</div>
                </div>
                <div className='property-icon-div'>
                  <BiArea className='property-icon' />
                  <div>{house.surface}</div>
                </div>
              </div>
              <div>{house.description}</div>
            </div>
            <div className='property-12'>
              <div className='property-13'>
                <div>
                  <img className='img-2' src={house.agent.image} alt='' />
                </div>
                <div>
                  <div className='property-14'>{house.agent.name}</div>
                  <Link to='' className='property-link'>View Listings</Link>
                </div>
              </div>
              <form className='form'>
                <input className='input' type='text' placeholder='Name*'/>
                <input className='input' type='text' placeholder='Email*'/>
                <input className='input' type='text' placeholder='Phone*'/>
                <textarea className='textarea' placeholder='Message*' defaultValue='Hello, I am interested in [Modern apartment]'></textarea>
                <div className='property-15'>
                  <button className='button'>Send message</button>
                  <button className='button-2'>Call</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </section>
  )
}

export default PropertyDetails