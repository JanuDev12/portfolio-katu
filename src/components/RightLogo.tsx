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
      className="w-[65px] h-[780px] mt-4 relative"
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
      <div className='size-10 bg-slate-200 rounded-xl absolute bottom-0 ml-4'>
        
      </div>
    </motion.div>
  );
}

export default RightLogo