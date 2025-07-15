import React, { useState, useRef } from "react";
import Wrapper from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../style";
import Earth from "./canvas/Earth";
import { slideIn } from "../utils/motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import axios from "axios";
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [feedbackform, setFeedbackorm] = useState({
    name: "",
    Designation: "",
    Company: "",
    Comment: "",
  });

  const [loading, setLoading] = useState(false);
  const [loadingfeedback, setLoadingfeedback] = useState(false);
  const formRef = useRef();
  const formFeedRef = useRef();

  const handlechange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handlefeedbackchange = (e) => {
    const { name, value } = e.target;
    setFeedbackorm({ ...feedbackform, [name]: value });
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

  const handleSubmitapi = (e) => {
    e.preventDefault();
    setLoadingfeedback(true);

    axios
      .post("https://manoj-portfolio-node.onrender.com/api/feedback", {
        Name: feedbackform.name,
        Designation: feedbackform.Designation,
        Company: feedbackform.Company,
        Comment: feedbackform.Comment,
      })
      .then(() => {
        setFeedbackorm({ name: "", Designation: "", Company: "", Comment: "" });
        Swal.fire({
          title: "Success",
          text: "Thank you for your feedback. It will be reflected soon!",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          window.history.replaceState(null, "", "/");
          window.location.reload();
          window.scrollTo(0, 0);
          setLoadingfeedback(false);
        });
      })
      .catch((error) => {
        setLoadingfeedback(false);
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
        <h3 className={styles.sectionHeadText}>Feedback!</h3>
        <form
          ref={formFeedRef}
          onSubmit={handleSubmitapi}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              required="true"
              name="name"
              value={feedbackform.name}
              onChange={handlefeedbackchange}
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
              required="true"
              type="Designation"
              name="Designation"
              value={feedbackform.Designation}
              onChange={handlefeedbackchange}
              placeholder="What's your Designation?"
              className="bg-tertiary py-4 px-6 
              placeholder:text-secondary text-white
              rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Company</span>
            <input
              required="true"
              type="Company"
              name="Company"
              value={feedbackform.Company}
              onChange={handlefeedbackchange}
              placeholder="What's your Designation?"
              className="bg-tertiary py-4 px-6 
              placeholder:text-secondary text-white
              rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Comment</span>
            <textarea
              required="true"
              rows="7"
              name="Comment"
              value={feedbackform.Comment}
              onChange={handlefeedbackchange}
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
            {loadingfeedback ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)} // direction, type, delay, duration
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact!</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              required="true"
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
              required="true"
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
              required="true"
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
