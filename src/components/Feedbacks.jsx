import React, { useEffect, useState } from "react";
import { testimonials as FeedbackfromDB } from "../constants";
import Wrapper from "../hoc";
const Feedbacks = () => {
  const [feedback, setFeedback] = useState([]);

  const handleScroll = () => {
    const scrollpos = window.scrollY;
    const slider = document.querySelector(".slider");
    const initialTransform = `translate3d(-50%, -50%,0) rotateX(0deg) rotateY(-25deg) rotateZ(-120deg)`;
    const zoffset = scrollpos * 0.5;
    slider.style.transform = `${initialTransform} translateZ(${zoffset}px)`;
  };

  const handlemouseover = (e) => {
    e.currentTarget.style.left = "15%";
    e.currentTarget.style.background = "#000000";
  };

  const handlemouseout = (e) => {
    e.currentTarget.style.background = "none";
    e.currentTarget.style.left = "0%";
  };
  useEffect(() => {
    const newfeedbacks = FeedbackfromDB.map((feedback, index) => ({
      id: index + 1,
      name: feedback.name,
      feedback: feedback.testimonial,
      image: feedback.image,
    }));
    setFeedback(newfeedbacks);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div>
        {feedback.map((item) => (
          <div
            key={item.id}
            className=""
            onMouseOver={handlemouseover}
            onMouseOut={handlemouseout}
          >
            <img src={item.image} alt={item.name} className="feedback-image" />
            <h3 className="feedback-name">{item.name}</h3>
            <p className="feedback-text">{item.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wrapper(Feedbacks, "feedbacks");
