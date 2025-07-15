import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { styles } from "../style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { textVariant } from "../utils/motion";
import "../index.css"; // Ensure this path is correct based on your project structure
import Wrapper from "../hoc";
import Popup from "./Popup";
import axios from "axios";
const Feedbacks = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow:
      window.innerWidth < 1000 ? (window.innerWidth < 768 ? 1 : 2) : 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const [FeedbackfromDB, setFeedbackfromDB] = useState([]);

  const [showPopup, setShowPopup] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const handleclick = (d) => {
    setShowPopup(true);
    setSelectedTestimonial(d);
  };

  const onmousehover = (e) => {
    e.target.autoplay = false;
  };

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          "https://manoj-portfolio-node.onrender.com/api/feedback"
        );
        const data = response.data;
        if (data) {
          const testimonialsArray = Object.keys(data).map((key) => ({
            ...data[key],
            id: key,
          }));
          setFeedbackfromDB(testimonialsArray);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className="w-3/4 m-auto">
        <motion.div variants={textVariant()} className="pt-10">
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
        <div className="mt-20">
          <Slider {...settings} onmouseHover={onmousehover}>
            {FeedbackfromDB.map((d) => (
              <motion.div
                variants={textVariant()}
                key={d.Name}
                className="bg-white mt-20 mb-20 h-[500px] text-black rounded-xl transform transition-transform duration-300 hover:scale-105"
              >
                <div className=" h-56 rounded-t-xl bg-gradient-to-r from-green-500 to-blue-500 p-4 flex items-center justify-center">
                  <img
                    src={d.image}
                    alt={d.Name}
                    className="w-20 h-20 rounded-full"
                  />
                </div>
                <motion.div
                  variants={textVariant()}
                  className="flex flex-col justify-center items-center p-4 gap-4"
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold limitline-heading">
                    {d.Name}
                  </h3>
                  <motion.div
                    variants={textVariant()}
                    className="text-xs sm:text-sm md:text-base text-gray-500 limitline-heading "
                  >
                    {d.Designation} at {d.Company}
                  </motion.div>
                  <motion.p //direction, type, delay, duration
                    className="mt-4 text-secondary 
                  text-sm sm:text-base md:text-m max-w-3xl 
                  leading-[26px] sm:leading-[30px] limitline "
                  >
                    {d.Comment}
                  </motion.p>

                  <button
                    className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300"
                    onClick={() => handleclick(d)}
                  >
                    Read More
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </Slider>
          {showPopup && selectedTestimonial && (
            <Popup
              testimonial={selectedTestimonial}
              onClose={() => setShowPopup(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Wrapper(Feedbacks, "feedbacks");
