"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/app/utils/cn";
import Link from "next/link";

import './floating-navbar.css'

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.1) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100, }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0, }}
        transition={{ duration: 0.2, }}
        className={cn(
          "max-w-full navbar justify-between  fixed inset-x-0 border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 space-x-4",
          className
        )}
      >
        <Link className="navbar-start" href={'/'}>Bhaskar Lal Das</Link>
        <div className="relative hidden md:flex md:justify-end space-x-4 mr-4 pr-4">
          {navItems.map((navItem: any, idx: number) => (
            <a key={`link=${idx}`} href={navItem.link}
              className={cn(
                // "btn  dark:text-neutral-50 items-center space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="text-sm">{navItem.name}</span>
            </a>
          ))}
        </div>
        <div className="flex md:hidden">
          <ul tabIndex={0}>
            <li><a className='btn-1' href='#AboutMe'>About Me</a></li>
            <li><a className='btn-1' href='#Projects'>Projects</a></li>
            <li><a className='btn-1' href='#Courses'>Courses</a></li>
            <li><a className='btn-1' href='#Contact'>Contact</a></li>
          </ul>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
