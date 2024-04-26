'use client'
import { link } from 'fs'
import React from 'react'
import contactDetail from "@/app/data/contactsDetail.json"

function Contact() {
  return (
    <footer id='Contact'>
      {/* <div className="px-[15px]"> */}
      {/* <div className="flex flex-wrap -mx-[15px] w-fit justify-center"> */}
      {/* <div className="w-7/12 basis-7/12 grow-0 shrink-0"> */}
      <h1 className='relative z-10 text-lg text-purple-600 font-sans mb-1'>Contacts /&gt;</h1>
      {/* <div className="top-1/2 translate-y-1/4"> */}
      <h2 className="mt-3 pt-3 text-2xl">Find me on:</h2>
      {contactDetail.contacts.map((item, index) => (
        <div className="w-fit mb-3 grid grid-cols-3">
          <a key={`content-${index}`} href={item.link} className='text-xl my-[2px] mx-0 whitespace-nowrap text-green-600'>{item.name}</a>
        </div>
      ))}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </footer>
  )
}

export default Contact

// const contacts = [
//   {
//     link: 'https://github.com/',
//     name: 'Github',
//   },
// ]