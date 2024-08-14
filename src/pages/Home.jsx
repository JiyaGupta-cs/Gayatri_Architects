import React, { useState } from 'react'
import Carousel from '../components/Carousel'
import Navbar from '../components/Navbar'

const Home = () => {
  const [showCarousel, setShowCarousel] = useState(false)

  const handleCircleClick = () => {
    setShowCarousel(true)
  }

  return (
    <div className='bg-white h-screen w-screen flex flex-col items-center justify-center'>
      <div className='fixed top-0 z-10'>
      <Navbar />
      </div>
      
      {!showCarousel ? (

<div className=" w-full  bg-[] overflow-hidden flex justify-center items-center">
     <button onClick={handleCircleClick} className='h-[23rem] w-[23rem] md:h-[60vh] md:w-[60vh] bg-[#F5EDDE] border-none focus:border-none rounded-[50%]'></button>
    </div>

      ) : (
        <Carousel/>
      )}
    </div>
  )
}

export default Home
