'use client'
import React from 'react'
import { BackgroundBeams } from './ui/background-beams'
import Image from 'next/image'

function Hero() {
  return (
    <div className='relative flex flex-col pt-16'>
      <div className='flex flex-row'>
        {/* Hi_Bhaskar.gif */}
        <div className='md:px-10 md:py-2 lg:px-20 overflow-hidden'>
          <Image className="display" src="images/Hi_Bhaskar_dark.gif" alt='Hi/Hello/Welcome' />
          <div className='text-3xl font-semibold align-middle items-center'>
            My name is <span className='text-4xl text-purple-800 dark:text-purple-600'>Bhaskar Lal Das</span><br /> 
            I am a <span className=' text-4xl text-purple-800 dark:text-purple-600'>Full Stack Developer</span> and <span className=' text-4xl text-purple-800 dark:text-purple-600'>Data Scientist</span>
          </div>
        </div>

        <div className='flex flex-col h-fit lg:h-full justify-center items-center'>
          {/* Image Card */}
          <div className="relative z-20 hidden md:flex">
            <div className="relative w-20 h-20 md:w-60 mr-4 md:h-60 lg:w-96 lg:h-96 rounded-2xl cursor-pointer overflow-hidden transition-all duration-700 flipcard">
              <div className="absolute inset-0 w-full h-full transition-all duration-100 delay-200 z-20 hover:opacity-0">
                <Image src="images/01.jpg" alt='profile image01' />
              </div>
              <div className="absolute inset-0 w-full h-full transition-all z-10 flipcard-back">
                <Image src="images/02.jpg" alt='profile image02' />
              </div>
            </div>
          </div>
          {/* Name and Paragraph Card */}
          <div className='flex flex-col relative z-10 '>
            {/* <h1 className='relative z-10 text-sm md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold'>BHASKAR LAL DAS</h1> */}
            {/* <p className='text-neutral-500 max-w-lg mx-auto my-2 text-xs md:text-sm text-center relative z-10'>A bit about Me</p> */}
          </div>
        </div>
        <BackgroundBeams />
      </div>
      {/* Buttons */}
      <div className='flex flex-row-reverse mt-4 mr-8 relative z-10'>
        <button className='p-2 mx-2 bg-purple-900 text-white btn glass btn-xs sm:btn-sm md:btn-md lg:btn-md'><a href='#Contact'>Contact</a></button>
        <button className='p-2 mx-2 bg-purple-900 text-white btn glass btn-xs sm:btn-sm md:btn-md lg:btn-md'><a href='#Courses'>Courses</a></button>
        <button className='p-2 mx-2 bg-purple-900 text-white btn glass btn-xs sm:btn-sm md:btn-md lg:btn-md'><a href='#Projects'>Projects</a></button>
        <button className='p-2 mx-2 bg-purple-900 text-white btn glass btn-xs sm:btn-sm md:btn-md lg:btn-md'><a href='#AboutMe'>About Me</a></button>
      </div>
    </div>
  )
}

export default Hero