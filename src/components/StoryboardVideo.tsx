import { delay, motion } from "motion/react";


function StoryboardVideo() {

    const FADE_DOWN_ANIMATION_VARIANTS = {
      hidden: { opacity: 0, y: -10 },
      show: { opacity: 1, y: 0, transition: { type: "spring" }, duration: 3 },
    };

  return (
    <motion.div
      className="mt-48 mb-28 w-full "
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <h3 className="text-xl font-semibold uppercase tracking-wide font-proxima text-center">
        Pilot
      </h3>
      <div className="w-[6%] h-[2px] bg-red-500 rounded mb-4 mx-auto"></div>

      <motion.video
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        src="https://video.wixstatic.com/video/a9013c_2ca45b029a21401ba58394b77609bba3/480p/mp4/file.mp4"
        controls
        autoPlay
        muted
        className="w-full h-full object-cover  border-[2px] rounded border-black"
      ></motion.video>
    </motion.div>
  );
}

export default StoryboardVideo