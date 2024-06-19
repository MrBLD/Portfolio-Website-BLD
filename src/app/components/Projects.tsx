'use client'
import React from 'react'
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import project from "@/app/data/projects.json"
import Image from 'next/image';

function Projects() {
  return (
    <>
    <h1 className=' relative z-10 text-lg text-purple-600 font-sans -mb-20 mt-5'>Projects /&gt;</h1>
    <div id='Projects' className='relative flex flex-col mr-16 ml-36 z-10 mt-8'>
      {project.projectName.map((item, index) => (
      <CardContainer key={`card-${index}`}>
        <CardBody key={`content-${index}`} className='flex flex-row relative rounded-xl w-fit -px-8 border-2 border-purple-900'>
          <CardItem translateZ="60" translateX="-10" className=' rounded-xl -ml-32 flex flex-col z-[11] justify-center -mr-32'>
            <p className='flex flex-row items-center relative rounded-xl w-fit text-stroke text-sm sm:text-xl font-semibold'>{item.description}</p>
          </CardItem>
          {/* <CardItem translateZ="50" translateX='30' className='rounded-xl z-10 flex w-20 h-20 md:w-60 md:h-60 lg:w-96 lg:h-96 mr-8 bg-green-400 overflow-hidden'> */}
          <CardItem translateZ="40" translateX='30' className='relative rounded-xl z-10 flex md:w-60 md:h-60 lg:w-full lg:h-full mr-8 overflow-hidden'>
            <div className='pt-auto mt-1 flex flex-row items-center relative w-full h-full'><Image src={`/images/${item.image}`} alt="Album" width={1920} height={1080}/></div>
          </CardItem>
          <CardItem translateZ="60" translateX='-15' className='flex flex-col-reverse text-stroke font-semibold text-lg sm:text-2xl -ml-28 z-10 p-2'>
            <h2>{item.headline}</h2>
          </CardItem>
        </CardBody>
      </CardContainer>
      ))
      }
    </div>
    </>
  )
}

export default Projects