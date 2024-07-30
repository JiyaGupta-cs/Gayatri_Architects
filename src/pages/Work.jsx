import React from 'react'
import Navbar from '../components/Navbar'

const Work = () => {
  return (
    <div className='md:h-screen w-screen bg-[#f1e7cd] overflow-hidden'>
      <Navbar />
      <div className='flex flex-col px-8 md:px-8 py-12 min-h-[80vh] gap-8 items-center justify-around  '>
        <h2 className='text-[#7c7b7b] text-4xl'>Work</h2>
        <div className=' flex-col md:flex-row gap-8 hidden md:flex'>

          <div className="relative w-full max-w-xs group h-fit ">
            <img src="https://via.placeholder.com/600x800.png?text=Image+1" alt="Image" className="w-full" />
            <div className="absolute inset-0 flex items-center justify-center bg-[#C59D37] bg-opacity-0 group-hover:bg-opacity-55 transition duration-300 w-full">
              <span class="text-white text-xl opacity-0 group-hover:opacity-100 transition duration-300"> Text</span>
            </div>
          </div>
          <div className="relative w-full max-w-xs group h-fit">
            <img src="https://via.placeholder.com/600x800.png?text=Image+1" alt="Image" className="w-full" />
            <div className="absolute inset-0 flex items-center justify-center bg-[#C59D37] bg-opacity-0 group-hover:bg-opacity-55 transition duration-300 w-full">
              <span class="text-white text-xl opacity-0 group-hover:opacity-100 transition duration-300"> Text</span>
            </div>
          </div><div className="relative w-full max-w-xs group h-fit">
            <img src="https://via.placeholder.com/600x800.png?text=Image+1" alt="Image" className="w-full" />
            <div className="absolute inset-0 flex items-center justify-center bg-[#C59D37] bg-opacity-0 group-hover:bg-opacity-55 transition duration-300 w-full">
              <span class="text-white text-xl opacity-0 group-hover:opacity-100 transition duration-300"> Text</span>
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className='flex flex-col gap-8 md:hidden'>
          <div className="relative w-full max-w-xs group">
            <img
              src="https://via.placeholder.com/307x193.png?text=Image+1"
              alt="Image"
              className="w-full"
            />
            <div
              className="absolute inset-0 flex items-center justify-center transition duration-300 opacity-100"
              style={{
                background: 'linear-gradient(360deg, #C59D37 0%, rgba(255, 255, 255, 0) 100%)'
              }}
            >
              <span className="text-white text-xl">Centered Text</span>
            </div>
          </div>
          <div className="relative w-full max-w-xs group">
            <img
              src="https://via.placeholder.com/307x193.png?text=Image+1"
              alt="Image"
              className="w-full"
            />
            <div
              className="absolute inset-0 flex items-center justify-center transition duration-300 opacity-100"
              style={{
                background: 'linear-gradient(360deg, #C59D37 0%, rgba(255, 255, 255, 0) 100%)'
              }}
            >
              <span className="text-white text-xl">Centered Text</span>
            </div>
          </div>
          <div className="relative w-full max-w-xs group">
            <img
              src="https://via.placeholder.com/307x193.png?text=Image+1"
              alt="Image"
              className="w-full"
            />
            <div
              className="absolute inset-0 flex items-center justify-center transition duration-300 opacity-100"
              style={{
                background: 'linear-gradient(360deg, #C59D37 0%, rgba(255, 255, 255, 0) 100%)'
              }}
            >
              <span className="text-white text-xl">Centered Text</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work