import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div className='md:h-screen w-screen bg-[#f1e7cd] overflow-hidden'>
        <Navbar/>
        <div className='flex flex-col px-8 md:px-24 py-12 min-h-[80vh] gap-8 items-center justify-around'>
            <h2 className='text-[#7c7b7b] text-4xl'>About Us</h2>
            <div className='flex flex-col-reverse md:flex-col gap-8'>
                <p className='text-black  text-base md:text-xl text-justify'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus laboriosam vero aliquid iusto modi veniam blanditiis beatae quam totam eos est harum eveniet in dolores, accusantium sapiente fugiat. Fugiat, sed? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus laboriosam vero aliquid iusto modi veniam blanditiis beatae quam totam eos est harum eveniet in dolores, accusantium sapiente fugiat. Fugiat, sed?
                </p>
                <img src='https://via.placeholder.com/1400x300.png?text=Image+1' className='w-full h-[30vh] object-cover md:h-full' alt="" />
            </div>
        </div>
    </div>
  )
}

export default About