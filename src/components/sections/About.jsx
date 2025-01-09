import React from "react";
import { motion } from "framer-motion";
import HoverLink from "../utils/HoverLink";
const About = ({ id }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1, ease: "easeIn" }}
      className="lg:px-28 px-8 py-12"
      id={id}
    >
      <div className="text-2xl text-[var(--color-head-text)] font-bold mb-6">
        <span className="text-lg font-medium text-[var(--color-hover)]">
          01.
        </span>{" "}
        About Me
      </div>
      <div className="flex lg:flex-row flex-col-reverse items-center w-full gap-12">
        <div className="text-lg text-[var(--color-text)] mb-8 text-justify">
          Hi there! I'm Md Sarfaraz Afzal, a final-year Computer Science
          Engineering student at{" "}
          <HoverLink text={"MCKVIE"} link={"https://www.mckvie.edu.in/"} />
          , passionate about coding, problem-solving, and building impactful
          solutions.
          <br />
          <br />
          Currently, I’m refining my Data Structures and Algorithms knowledge
          while exploring Web3 technologies to build innovative decentralized
          applications. My goal is to become a versatile full-stack developer,
          combining my expertise in web development, machine learning, and
          blockchain to create meaningful digital experiences.
          <br />
          <br />
          Outside of coding, I enjoy gaming and watching movies, which often
          spark fresh ideas for my projects. Let’s{" "}
          <HoverLink text={"connect"} link={"https://linkedin.com/in/mdsarfarazafzal"} />{" "}
        and create something amazing together!
        </div>
        <div className="flex items-center justify-left rounded-md mb-8 lg:w-auto md:w-2/3 sm:w-2/3">
          <div id="pfp">
            <img src="/pfp.jpg" alt="profilePicture" className="rounded-md" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
