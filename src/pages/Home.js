import React from 'react'
import Banner from '../components/Banner'
import HouseList from '../components/HouseList'
import '../pages/Home.css'

const Home = () => {
  return (
    <div className='home'>
      <Banner />
      <HouseList />
    </div>
  )
}

export default Home