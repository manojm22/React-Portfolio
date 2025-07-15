import React, { useRef } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
const Popup = ({ testimonial, onClose }) => {
  const modelref = useRef();
  const closemodel = (e) => {
    if (modelref.current === e.target) {
      onClose();
    }
  };
  console.log(testimonial);
  return (
    <div
      ref={modelref}
      onClick={closemodel}
      className="fixed inset-0 bg-black bg-opacity-30 
    backdrop-blur-sm flex justify-center items-center"
    >
      <div className="mt-10 flex-col gap-5 text-white">
        <button className="float-right mt-10" onClick={onClose}>
          <X size={30} />
        </button>
        <div
          key={testimonial.name}
          className="bg-white mt-20 xs:mb-20 sm:mb-20 h-[500px] text-black rounded-xl"
        >
          <div className=" h-56 rounded-t-xl bg-gradient-to-r from-green-500 to-blue-500 p-4 flex items-center justify-center">
            <img
              src={testimonial.image}
              alt={testimonial.Name}
              className="w-20 h-20 rounded-full"
            />
          </div>
          <motion.div className="flex flex-col justify-center items-center p-4 gap-4">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold">
              {testimonial.Name}
            </h3>
            <motion.div className="text-xs sm:text-sm md:text-base text-gray-500 ">
              {testimonial.Designation} at {testimonial.Company}
            </motion.div>
            <motion.p //direction, type, delay, duration
              className="mt-4 text-secondary 
                  text-sm sm:text-base md:text-m max-w-3xl 
                  leading-[26px] sm:leading-[30px] "
            >
              {testimonial.Comment}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
