'use client'
import React from 'react'
import { TracingBeam } from "@/app/components/ui/tracing-beam";

function AboutMe() {
  return (
    // <TracingBeam className="">
      <div id='AboutMe' className='flex z-10 w-fit mt-8 ml-16'>
        {/* Name and Paragraph */}
        <div className='flex-col mt-6'>
          <h1 className='relative z-10 text-sm md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold'>BHASKAR LAL DAS</h1>
          <p className='text-neutral-500 max-w-lg mx-auto my-2 text-2xl text-center relative z-10'>Lorem Ipsum Dolor Sit duis est minim proident non nisi velit non consectetur. Esse adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur fugiat Lorem aute sit ullamco. </p>
        </div>

        {/* Image */}
        <div className="relative w-30 h-30 m-8 p-8 md:w-60 md:h-60 lg:w-96 lg:h-96 flex rounded-full cursor-pointer overflow-clip transition-all duration-700 flipcard">
          <div className="absolute inset-0 w-full h-full transition-all duration-100 delay-200 z-20 hover:opacity-0">
            <img src="images/01.jpg" />
          </div>
          <div className="absolute inset-0 w-full h-full transition-all z-10 flipcard-back">
            <img src="images/02.jpg" />
          </div>
        </div>
      </div>
    // </TracingBeam>
  )
}
export default AboutMe