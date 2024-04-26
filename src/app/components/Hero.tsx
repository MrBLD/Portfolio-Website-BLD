'use client'
import React from 'react'
import { BackgroundBeams } from './ui/background-beams'

function Hero() {
  return (
    <div className='flex flex-col pt-16'>
      <div className='flex flex-row'>
        {/* Hi_Bhaskar.gif */}
        <div className='md:px-10 md:py-2 lg:px-20 overflow-hidden'>
          <img className="display" src="images/Hi_Bhaskar_dark.gif" alt='Hi/Hello/Welcome'/>
        </div>
        <div>
          I am Bhaskar Lal Das
        </div>

        <div className='flex flex-col h-fit lg:h-full justify-center items-center'>
          {/* Image Card */}
          <div className="relative z-20 hidden md:flex">
            <div className="relative w-20 h-20 md:w-60 md:h-60 lg:w-96 lg:h-96 rounded-2xl cursor-pointer overflow-hidden transition-all duration-700 flipcard">
              <div className="absolute inset-0 w-full h-full transition-all duration-100 delay-200 z-20 hover:opacity-0">
                <img src="images/01.jpg" />
              </div>
              <div className="absolute inset-0 w-full h-full transition-all z-10 flipcard-back">
                <img src="images/02.jpg" />
              </div>
            </div>
          </div>
          {/* Name and Paragraph Card */}
          <div className='flex flex-col relative z-10 '>
            <h1 className='relative z-10 text-sm md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold'>BHASKAR LAL DAS</h1>
            <p className='text-neutral-500 max-w-lg mx-auto my-2 text-xs md:text-sm text-center relative z-10'>A bit about Me</p>
          </div>
        </div>
        <BackgroundBeams />
      </div>
      {/* Buttons */}
      <div className='flex flex-row-reverse mt-4 mr-8 relative z-10'>
        <button className='p-2 mx-2 btn glass btn-xs sm:btn-sm md:btn-md lg:btn-lg'><a href='#Contact'>Contact</a></button>
        <button className='p-2 mx-2 btn glass btn-xs sm:btn-sm md:btn-md lg:btn-lg'><a href='#Courses'>Courses</a></button>
        <button className='p-2 mx-2 btn glass btn-xs sm:btn-sm md:btn-md lg:btn-lg'><a href='#Projects'>Projects</a></button>
        <button className='p-2 mx-2 btn glass btn-xs sm:btn-sm md:btn-md lg:btn-lg'><a href='#AboutMe'>About Me</a></button>
      </div>
    </div>
  )
}

export default Hero