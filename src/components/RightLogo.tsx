import React from 'react'

import { motion } from "motion/react";

function RightLogo() {

   const FADE_DOWN_ANIMATION_VARIANTS = {
     hidden: { opacity: 0, y: 10 },
     show: {
       opacity: 1,
       y: 0,
       transition: { type: "spring", duration: 1.25 },
     },
   };

  return (
    <motion.div
      className="size-[65px] mt-4 relative"
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
      <motion.img
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className="w-full h-auto object-cover"
        src="https://static.wixstatic.com/media/a9013c_35c12ae789e645d4a8611bd9faa22e8c~mv2.png/v1/fill/w_233,h_289,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/FIRMA%20PODEROSA.png"
        alt=""
      />
      <ul className="flex flex-col text-sm items-start mt-4 uppercase font-proxima font-semibold tracking-tight">
        <li className="flex items-center relative">
          <span className="h-[3px] w-5 bg-neutral-600 absolute top-1/2 -left-6 rounded-lg"></span>
          <span> Stranger</span>
        </li>
        <li className='flex relative'>
          <span className="h-[3px] w-5 bg-neutral-600 absolute top-1/2 -left-6 rounded-lg"></span>
          <span> Trolls Rough</span>
        </li>
        <li className='relative'>
          <span className="h-[3px] w-5 bg-neutral-600 absolute top-1/2 -left-6 rounded-lg"></span>
          <span>Karma</span>
        </li>
      </ul>
    </motion.div>
  );
}

export default RightLogo