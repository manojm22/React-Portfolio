import { styles } from "../style";
import { motion } from "framer-motion";
import { Capture } from "../assets";
const Hero = () => {
  return (
    <div
      /*  className="relative w-full h-screen mx-auto z-0
    xl:mt-12 xl:flex-col
    flex-col-reverse flex gap-50 overflow-hidden" */
      className="h-screen flex sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4"
    >
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] 
        max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 square-full bg-[#00ff0d]" />
          <div className="w-1 sm:h-30 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className="text-6xl font-bold text-white">
            Hi, I'm <span className="text-[#00ff0d]">Manoj M</span>
          </h1>
          <p className="mt-2 text-xl text-gray-300">Welcome to My portfolio.</p>
        </div>
      </div>
      <div className="h-full flex items-center self-end justify-center">
        <img src={Capture} className="media max-h-[400px] w-auto" />
      </div>

      <div
        className="absolute xs:bottom-10 bottom-32 
      w-full flex justify-center items-center"
      >
        <a href="#about">
          <div
            className="w-[30px] h-[60px] rounded-3xl border-4 
          border-secondary flex justify-center items-start p-2"
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
