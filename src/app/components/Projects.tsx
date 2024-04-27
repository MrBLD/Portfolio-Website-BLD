'use client'
import React from 'react'
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import project from "@/app/data/projects.json"
import Image from 'next/image';

function Projects() {
  return (
    <>
    <h1 className=' relative z-10 text-lg text-purple-600 font-sans -mb-20 mt-5'>Projects /&gt;</h1>
    <div id='Projects' className='relative flex flex-col mr-2 z-10 mt-8'>
      {project.projectName.map((item, index) => (
      <CardContainer key={`card-${index}`}>
        <CardBody key={`content-${index}`} className='flex flex-row relative rounded-xl w-fit -px-8 border-2 border-purple-900'>
          <CardItem translateZ="20" translateX="-10" className=' rounded-xl -ml-40 flex flex-col z-[11] justify-center -mr-12'>
            <p className=''>{item.description}</p>
          </CardItem>
          {/* <CardItem translateZ="50" translateX='30' className='rounded-xl z-10 flex w-20 h-20 md:w-60 md:h-60 lg:w-96 lg:h-96 mr-8 bg-green-400 overflow-hidden'> */}
          <CardItem translateZ="50" translateX='30' className='relative rounded-xl z-10 flex w-20 h-20 md:w-60 md:h-60 lg:w-full lg:max-h-fit mr-8 bg-green-400 overflow-hidden'>
            <div className='relative w-full h-full aspect-w-16 aspect-h-9'><Image src={`/images/${item.image}`} alt="Album" layout="fill"/></div>
          </CardItem>
          <CardItem translateZ="20" translateX='-15' className='flex flex-col-reverse font-semibold z-10 p-2'>
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