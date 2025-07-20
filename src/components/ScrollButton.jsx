import React, { useState } from "react";

import { FaArrowUp } from "react-icons/fa";
const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button className="fixed z-[1000] bottom-5 right-5 ">
      <FaArrowUp
        onClick={scrollToTop}
        className={` text-3xl ${visible ? "inline" : "hidden"}`}
      />
    </button>
  );
};

export default ScrollButton;
