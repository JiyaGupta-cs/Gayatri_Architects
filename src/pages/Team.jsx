import React from 'react'
import Navbar from '../components/Navbar'
import './Team.css'
const Team = () => {
  return (
    <div className='md:h-screen w-screen bg-[#f1e7cd] overflow-hidden'>
      <Navbar />
      <div className='flex flex-col px-8 md:px-24 py-12 min-h-[80vh] gap-8 items-center justify-around'>
        <h2 className='text-[#7c7b7b] text-4xl'>Team</h2>


        <div class="container hidden md:block">
          <div class="gallery-wrap">
            <div class="item item-1">
              <div class="overlay"> Text 1</div>
            </div>
            <div class="item item-2">
              <div class="overlay"> Text 2</div>
            </div>
            <div class="item item-3">
              <div class="overlay"> Text 3</div>
            </div>
            <div class="item item-4">
              <div class="overlay"> Text 4</div>
            </div>
            <div class="item item-5">
              <div class="overlay"> Text 5</div>
            </div>
            <div class="item item-6">
              <div class="overlay"> Text 6</div>
            </div>
            <div class="item item-7">
              <div class="overlay"> Text 7</div>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className='flex flex-col gap-8 md:hidden'>
          <div className="flex gap-4">
          <div className="relative w-full max-w-xs group">
            <img
              src="https://via.placeholder.com/129x130.png?text=Image+1"
              alt="Image"
              className="w-full"
            />
            <div
              className="absolute inset-0 flex items-end py-4 justify-center transition duration-300 opacity-100"
              style={{
                background: 'linear-gradient(360deg, #C59D37 0%, rgba(255, 255, 255, 0) 100%)'
              }}
            >
              <span className="text-white text-xl"> Text</span>
            </div>
          </div>
          <div className="relative w-full max-w-xs group">
            <img
              src="https://via.placeholder.com/129x130.png?text=Image+1"
              alt="Image"
              className="w-full"
            />
            <div
              className="absolute inset-0  flex items-end py-4 justify-center transition duration-300 opacity-100"
              style={{
                background: 'linear-gradient(360deg, #C59D37 0%, rgba(255, 255, 255, 0) 100%)'
              }}
            >
              <span className="text-white text-xl">  Text</span>
            </div>
          </div>
          </div>
          <div className="flex gap-4">
          <div className="relative w-full max-w-xs group">
            <img
              src="https://via.placeholder.com/129x130.png?text=Image+1"
              alt="Image"
              className="w-full"
            />
            <div
              className="absolute inset-0 flex items-end py-4 justify-center transition duration-300 opacity-100"
              style={{
                background: 'linear-gradient(360deg, #C59D37 0%, rgba(255, 255, 255, 0) 100%)'
              }}
            >
              <span className="text-white text-xl"> Text</span>
            </div>
          </div>
          <div className="relative w-full max-w-xs group">
            <img
              src="https://via.placeholder.com/129x130.png?text=Image+1"
              alt="Image"
              className="w-full"
            />
            <div
              className="absolute inset-0  flex items-end py-4 justify-center transition duration-300 opacity-100"
              style={{
                background: 'linear-gradient(360deg, #C59D37 0%, rgba(255, 255, 255, 0) 100%)'
              }}
            >
              <span className="text-white text-xl">  Text</span>
            </div>
          </div>
          </div>
          <div className="flex gap-4">
          <div className="relative w-full max-w-xs group">
            <img
              src="https://via.placeholder.com/129x130.png?text=Image+1"
              alt="Image"
              className="w-full"
            />
            <div
              className="absolute inset-0 flex items-end py-4 justify-center transition duration-300 opacity-100"
              style={{
                background: 'linear-gradient(360deg, #C59D37 0%, rgba(255, 255, 255, 0) 100%)'
              }}
            >
              <span className="text-white text-xl"> Text</span>
            </div>
          </div>
          <div className="relative w-full max-w-xs group">
            <img
              src="https://via.placeholder.com/129x130.png?text=Image+1"
              alt="Image"
              className="w-full"
            />
            <div
              className="absolute inset-0  flex items-end py-4 justify-center transition duration-300 opacity-100"
              style={{
                background: 'linear-gradient(360deg, #C59D37 0%, rgba(255, 255, 255, 0) 100%)'
              }}
            >
              <span className="text-white text-xl">  Text</span>
            </div>
          </div>
          </div>
          <div className="flex gap-4">
          <div className="relative w-full max-w-xs group">
            <img
              src="https://via.placeholder.com/129x130.png?text=Image+1"
              alt="Image"
              className="w-full"
            />
            <div
              className="absolute inset-0 flex items-end py-4 justify-center transition duration-300 opacity-100"
              style={{
                background: 'linear-gradient(360deg, #C59D37 0%, rgba(255, 255, 255, 0) 100%)'
              }}
            >
              <span className="text-white text-xl"> Text</span>
            </div>
          </div>
          <div className="relative w-full max-w-xs group">
            <img
              src="https://via.placeholder.com/129x130.png?text=Image+1"
              alt="Image"
              className="w-full"
            />
            <div
              className="absolute inset-0  flex items-end py-4 justify-center transition duration-300 opacity-100"
              style={{
                background: 'linear-gradient(360deg, #C59D37 0%, rgba(255, 255, 255, 0) 100%)'
              }}
            >
              <span className="text-white text-xl">  Text</span>
            </div>
          </div>
          </div>
         
         
          
        </div>

      </div>
    </div>
  )
}

export default Team