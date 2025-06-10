import { delay, motion } from "motion/react";
import { VideoDialog } from "./VideoDialog";


function StoryboardVideo() {

    const FADE_DOWN_ANIMATION_VARIANTS = {
      hidden: { opacity: 0, y: -10 },
      show: { opacity: 1, y: 0, transition: { type: "spring" }, duration: 3 },
    };

  return (
    <motion.div
      className="w-full px-12 relative z-10"
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
        Stranger
      </h3>
      <div className="w-[10%] h-[2px] bg-red-500 rounded mb-4 mx-auto"></div>
      {/* <VideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://video.wixstatic.com/video/a9013c_2ca45b029a21401ba58394b77609bba3/480p/mp4/file.mp4"
        thumbnailSrc="https://static.wixstatic.com/media/a9013c_b9060ba4e405472288aa20acae06a838~mv2.png/v1/fill/w_479,h_241,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a9013c_b9060ba4e405472288aa20acae06a838~mv2.png"
        thumbnailAlt="Hero Video"
      ></VideoDialog>
      <VideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://video.wixstatic.com/video/a9013c_2ca45b029a21401ba58394b77609bba3/480p/mp4/file.mp4"
        thumbnailSrc="https://static.wixstatic.com/media/a9013c_b9060ba4e405472288aa20acae06a838~mv2.png/v1/fill/w_479,h_241,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a9013c_b9060ba4e405472288aa20acae06a838~mv2.png"
        thumbnailAlt="Hero Video"
      /> */}
      <motion.video
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        src="https://video.wixstatic.com/video/a9013c_2ca45b029a21401ba58394b77609bba3/480p/mp4/file.mp4"
        controls
        muted
        className="w-full h-full object-cover  border-[2px] rounded-md shadow-lg "
      ></motion.video>
    </motion.div>
  );
}

export default StoryboardVideo