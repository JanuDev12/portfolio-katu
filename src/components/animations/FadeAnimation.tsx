import { motion } from "motion/react";


const FadeAnimation: React.FC = ({ children }) => {

    const FADE_DOWN_ANIMATION_VARIANTS = {
      hidden: { opacity: 0, y: 10 },
      show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", duration: 2.25 },
      },
    };

  return (
    <motion.div
      className="w-full overflow-y-auto no-scroll"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 2.15,
          },
        },
      }}
    >
      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
        {children}
      </motion.div>
    </motion.div>
  );
}

export default FadeAnimation