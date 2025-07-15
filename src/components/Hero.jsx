import { style } from "framer-motion/client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${style.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 square-full bg-[#915eff]" />
          <div className="w-1 sm:h-30 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className="text-6xl font-bold text-white">
            Hi, I'm <span className="text-[#915eff]">Manoj M</span>
          </h1>
          <p className="mt-2 text-xl text-gray-300">Welcome to My portfolio.</p>
        </div>
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
    </section>
  );
};

export default Hero;
