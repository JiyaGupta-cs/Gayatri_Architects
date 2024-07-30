import React from 'react'
import Navbar from '../components/Navbar'

const Contact = () => {
  return (
    <div className='md:h-screen w-screen bg-[#f1e7cd] overflow-hidden'>
    <Navbar/>
    <div className='flex flex-col px-8 md:px-36 py-12 min-h-[80vh] gap-8 items-center justify-around'>
        <h2 className='text-[#7c7b7b] text-4xl font-medium'>Contact Us</h2>
        <div className='flex flex-col md:flex-row  gap-8 text-black px-2 md:px-16 items-center justify-center'>
            <div className='flex flex-col gap-5 justify-evenly h-[100%] md:w-[50%]'>
                <div><p className='bg-[#e4d19e] p-4'>Lorem ipsum dolor sit, amet consectetur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, provident!  adipisicing elit. Ipsum, quos?</p></div>
                <div><p className='bg-[#e4d19e] p-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, reprehenderit.</p></div>
                <div><p className='bg-[#e4d19e] p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia architecto dignissimos officia aliquam nemo qui! Illum rerum animi harum laboriosam optio ducimus explicabo vitae quidem rem, minima eius vero sunt porro doloremque cupiditum dolor sit amet consectetur adipisicing elit. Quia architecto dignissimos officia aliquam nemo qui! Illum rerum animi harum laboriosam optio ducimus explicabo vitae quidem rem, minima eius vero sunt porro doloremque cupiditum dolor sit amet consectetur adipisicing elit. Quia architecto dignissimos officia aliquam nemo qui! Illum rerum animi harum laboriosam optio ducimus explicabo vitae quidem rem, minima eius vero sunt porro doloremque cupiditate reprehenderit dicta! Amet quae exercitationem odio aperiam!</p></div>
            </div>
            <div className='md:w-[30%] flex flex-col gap-16'>
                <div>
                <img src='https://via.placeholder.com/480x300.png?text=Image+1' alt="" />
                </div>
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, commodi!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum error ad odio eligendi at ullam nemo cum exercitationem explicabo hic.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Contact