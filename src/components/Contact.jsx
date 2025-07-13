import React, { useState, useRef } from "react";
import Wrapper from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../style";
import Earth from "./canvas/Earth";
import { slideIn } from "../utils/motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const handlechange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_v2bdyko",
        "template_c66te0w",
        {
          from_name: form.name,
          to_name: "manoj",
          from_email: form.email,
          to_email: "manojmenon222@gmail.com",
          message: form.message + form.email,
        },
        "zZvYmls5IipxAxfbC"
      )
      .then(() => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error sending email:", error);
        alert("Something went wrong. Please try again later.");
      });
  };
  return (
    <div
      className="xl:mt-12 xl:flex-row
    flex-col-reverse flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)} // direction, type, delay, duration
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <motion.p className={styles.sectionSubText}>
          This goes to feedback section
        </motion.p>
        <h3 className={styles.sectionHeadText}>Feedback.</h3>
        <form
          ref={formRef}
          onSubmit={console.log("submit")}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handlechange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 
              placeholder:text-secondary text-white
              rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Designation
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handlechange}
              placeholder="What's your Designation?"
              className="bg-tertiary py-4 px-6 
              placeholder:text-secondary text-white
              rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Feedback</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handlechange}
              placeholder="What do you want to say about my page?"
              className="bg-tertiary py-4 px-6 
              placeholder:text-secondary text-white
              rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 
            outline-none w-fit text-white font-bold
             shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)} // direction, type, delay, duration
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handlechange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 
              placeholder:text-secondary text-white
              rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handlechange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 
              placeholder:text-secondary text-white
              rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handlechange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 
              placeholder:text-secondary text-white
              rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 
            outline-none w-fit text-white font-bold
             shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Wrapper(Contact, "contact");
