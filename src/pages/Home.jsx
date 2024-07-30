import React from 'react'
import Carousel from '../components/Carousel'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='bg-white h-screen w-screen'>
      <Navbar/>
    <Carousel/>
    </div>
  )
}

export default Home