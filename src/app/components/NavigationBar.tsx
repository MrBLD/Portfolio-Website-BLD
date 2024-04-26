// 'use client'
// import React from 'react'

// function NavigationBar() {
//   return (
//     <>
//       <div className="navbar bg-base-100 w-full mr-10 relative z-10">
//         <div className="navbar-start">
//           <a className="btn btn-ghost text-xl" href='/'>daisyUI</a>
//         </div>

//         <div className="navbar-end">
//           <div className="hidden lg:flex">
//             <ul className="menu menu-horizontal px-1">
//               <li><a href='Contact'>Contact</a></li>
//               <li><a href='Courses'>Courses</a></li>
//               <li><a href='#Projects'>Projects</a></li>
//               <li><a href='#AboutMe'>About Me</a></li>

//             </ul>
//           </div>
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//             </div>
//             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//               <li><a href='#AboutMe'>About Me</a></li>
//               <li><a href='#Projects'>Projects</a></li>
//               <li><a href='Courses'>Courses</a></li>
//               <li><a href='Contact'>Contact</a></li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default NavigationBar

"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
export function NavigationBar() {
  const navItems = [
    {
      name: "About Me",
      link: "#AboutMe",
    },
    {
      name: "Projects",
      link: "#Projects",
    },
    {
      name: "Courses",
      link: "#Courses",
    },
    {
      name: "Contact",
      link: "#Contact",
    },
  ];

  return (
    <div className="relative w-full mt-2">
      <FloatingNav navItems={navItems}/>
    </div>
  );
};

export default NavigationBar