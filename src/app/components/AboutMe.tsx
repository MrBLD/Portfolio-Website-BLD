'use client'
import React from 'react'
import Image from 'next/image';

function AboutMe() {
  return (
    // <TracingBeam className="">
      <div id='AboutMe' className='flex z-10 justify-center items-center mt-8 '>
        {/* Name and Paragraph */}
        <div className='flex-col mt-6'>
          <h1 className='relative z-10 text-lg text-purple-700 font-sans mb-5 -ml-20'>Start /&gt;</h1>
          <h1 className='relative z-10 text-sm md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold'>BHASKAR LAL DAS</h1>
          <p className='text-neutral-500 max-w-lg sm:mx-auto my-2 sm:text-3xl text-center relative z-10'>I am a detail-oriented, disciplined and fast learner constantly seeking to expand my technical expertise. Motivated, focused, and adept at problem-solving, eagerly embracing new challenges while continuously pursuing personal and professional growth. </p>
        </div>

        {/* Image */}
        <div className="relative w-30 h-30 m-8 p-8 md:w-60 md:h-60 lg:w-96 lg:h-96 flex rounded-full cursor-pointer overflow-clip transition-all duration-700 flipcard">
          <div className="absolute inset-0 w-full h-full transition-all duration-100 delay-200 z-20 hover:opacity-0">
            <Image src="/images/01.jpg" alt='About Profile image01' width={1000} height={1200} />
          </div>
          <div className="absolute inset-0 w-full h-full transition-all z-10 flipcard-back">
            <Image src="/images/02.jpg" alt='About profile image02' width={1000} height={1200} />
          </div>
        </div>
      </div>
    // </TracingBeam>
  )
}
export default AboutMe