'use client'
import React from 'react'
import { TracingBeam } from "@/app/components/ui/tracing-beam";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import courses from "@/app/data/coursesDetail.json"

function Courses() {
  return (
    <div id='Courses' className='flex flex-col items-center z-10 w-full mt-8 ml-16'>
      {courses.coursesName.map((item, index) => (
      <CardContainer className='inter-var -ml-96'>
        <CardBody key={`content-${index}`} className='flex flex-row relative rounded-xl w-fit items-center -px-8  border-2 border-red-600'>
          <CardItem translateZ="20" translateX="-10" className='rounded-xl -ml-40 flex flex-col  z-[11] justify-center -mr-12'>
            <p className=''>{item.description}</p>
          </CardItem>
          <CardItem translateZ="50" translateX='30' className='rounded-xl z-10 flex items-center w-20 h-20 md:w-60 md:h-60 lg:w-96 lg:h-96 mr-8 bg-green-400 overflow-hidden'>
            <div className='w-full h-full'><img src={`images/${item.image}`} alt="Album" /></div>
          </CardItem>
          <CardItem translateZ="20" translateX='-10' className=' z-10 flex items-center p-2  ml-12  m-2'>
            <h2>{item.headline}</h2>
          </CardItem>
        </CardBody>
      </CardContainer>
      ))
      }
    </div>
  )
}

export default Courses