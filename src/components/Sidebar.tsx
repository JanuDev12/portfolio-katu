import { motion } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface LinkItem {
  link: string;
  name: string;
}

interface SidebarProps {
  avatar: string;
  links: LinkItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ avatar, links }) => {

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
        className="p-[50px] h-full w-[270px] flex flex-col"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        
        {/* --- AVATAR ICON --- */}
        <div>
          <Avatar className="size-[70px] ">
            <AvatarImage
              src={avatar}
              alt="Katu"
            />
            <AvatarFallback>KT</AvatarFallback>
          </Avatar>
          <div className="mt-3 flex flex-col font-proxima ">
            <span className="text-2xl font-semibold text-black tracking-wide">
              Katu
            </span>
            <span className="text-sm font-semibold text-gray-500 tracking-tight ">
              storyboard/bg artist
            </span>
          </div>
        </div>

        {/* ---- LINKS ----- */}
        <nav className="w-full text-neutral-600">
          <ul className="text-[14.8px] leading-[22px] flex flex-col gap-2 mt-10 font-medium tracking-tight">

            {links.map((item, index) => (
              <li key={index} className="hover:text-red-400 hover:tracking-wide transition-all duration-300">
                <a href={item.link}>{item.name}</a>
              </li>
            ))}

          </ul>
        </nav>

        {/* --- SOCIAL MEDIA ICONS --- */}
        <div className="flex gap-3 mt-12">

          <div className="size-5 rounded cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 256 226"
            >
              <path
                fill="black"
                d="M55.491 15.172c29.35 22.035 60.917 66.712 72.509 90.686 11.592-23.974 43.159-68.651 72.509-90.686C221.686-.727 256-13.028 256 26.116c0 7.818-4.482 65.674-7.111 75.068-9.138 32.654-42.436 40.983-72.057 35.942 51.775 8.812 64.946 38 36.501 67.187-54.021 55.433-77.644-13.908-83.696-31.676-1.11-3.257-1.63-4.78-1.637-3.485-.008-1.296-.527.228-1.637 3.485-6.052 17.768-29.675 87.11-83.696 31.676-28.445-29.187-15.274-58.375 36.5-67.187-29.62 5.041-62.918-3.288-72.056-35.942C4.482 91.79 0 33.934 0 26.116 0-13.028 34.314-.727 55.491 15.172Z"
              />
            </svg>
          </div>
          <div className="size-5 rounded cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 1200 1227"
            >
              <path
                fill="black"
                d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
              />
            </svg>
          </div>
          <div className="size-5 rounded cursor-pointer">
            <svg
              viewBox="0 0 256 180"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <path
                d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"
                fill="black"
              />
              <path
                fill="white"
                d="m102.421 128.06 66.328-38.418-66.328-38.418z"
              />
            </svg>
          </div>
          <div className="size-5 rounded text-black cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-twitch"
            >
              <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
            </svg>
          </div>
        </div>

        {/* --- FOOTER SIDEBAR --- */}

        <div className="mt-auto flex flex-col text-sm font-semibold font-proxima ">
          <span>Val "Katu" Medrano - 2024 </span>
          <span className="text-xs">Created for [me]</span>
        </div>
      </motion.aside>
    </motion.div>
  );
}

export default Sidebar