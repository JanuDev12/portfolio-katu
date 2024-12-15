import React from 'react'
import AvatarIcon from './AvatarIcon';

import { motion } from "motion/react";

function Sidebar() {

   const FADE_DOWN_ANIMATION_VARIANTS = {
     hidden: { opacity: 0, x: -10 },
     show: {
       opacity: 1,
       x: 0,
       transition: { type: "spring", duration: 1.25 },
     },
   };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.aside
        className="p-[50px] h-full w-[270px] flex flex-col sidebar"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        <AvatarIcon />
        <nav className="w-full text-neutral-600">
          <ul className="text-[14.8px] leading-[22px] flex flex-col gap-2 mt-10 font-medium tracking-tight">
            <li className="hover:text-red-400 hover:tracking-wide transition-all duration-300">
              <a href="/">storyboard portfolio</a>
            </li>
            <li className="hover:text-red-400 hover:tracking-wide transition-all  duration-300">
              <a href="">password</a>
            </li>
            <li className="hover:text-red-400 hover:tracking-wide transition-all duration-300">
              <a href="sketchbook">backgrounds</a>
            </li>
            <li className="hover:text-red-400 hover:tracking-wide transition-all duration-300">
              <a href="merch">merch art</a>
            </li>
            <li className="hover:text-red-400 hover:tracking-wide transition-all duration-300">
              <a href="">about me</a>
            </li>
          </ul>
        </nav>

        <div className="flex gap-2 mt-12">
          <div className="size-5 bg-neutral-700 rounded"></div>
          <div className="size-5 bg-neutral-700 rounded"></div>
          <div className="size-5 bg-neutral-700 rounded"></div>
          <div className="size-5 bg-neutral-700 rounded"></div>
        </div>

        <div className="mt-auto flex flex-col text-sm font-semibold font-proxima ">
          <span>Val "Katu" Medrano - 2024 </span>
          <span className="text-xs">Created for [me]</span>
        </div>
      </motion.aside>
    </motion.div>
  );
}

export default Sidebar