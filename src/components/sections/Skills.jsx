import React from "react";
import { motion } from "framer-motion";
import SkillCard from "../utils/SkillCard";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiJavascript,
  SiJupyter,
  SiHtml5,
  SiCss3,
  SiRedhat,
  SiTensorflow,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiPython,
  SiGithub,
  SiC,
  SiCanva
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const Skills = ({ id }) => {
  const skills = [
    SiReact,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiMongoose,
    SiJavascript,
    SiJupyter,
    SiHtml5,
    SiCss3,
    SiRedhat,
    SiTensorflow,
    SiTailwindcss,
    SiBootstrap,
    SiGit,
    VscVscode,
    SiPython,
    SiGithub,
    FaJava,
    SiC,
    SiCanva
  ];
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1, ease: "easeIn" }}
      className="lg:px-28 px-8 my-16 flex xl:flex-row flex-col w-full xl:justify-between gap-16"
      id={id}
    >
        <div className="flex flex-col xl:w-1/2 w-auto">
          <div className='text-2xl text-[var(--color-head-text)] font-bold mb-6'><span className='text-lg font-medium text-[var(--color-hover)]'>03.</span> Some technologies I've worked with:</div>
          <div className="flex flex-wrap justify-center items-center">
          {skills.map((skill, index) => (
            <SkillCard icon={skill} />
          ))}
          </div>
        </div>
        <div className="flex flex-col justify-start gap-10">
        <div className='text-2xl text-[var(--color-head-text)] font-bold mb-6'>Where I've worked:</div>
          <div className="flex justify-center items-center">
          <a
            href="https://www.mckvie.edu.in/"
          ><img src="/mckv.png" alt="mckvielogo" className="md:w-96 md:h-96 w-64 h-64" /></a>
          </div>
        </div>
    </motion.div>
  );
};

export default Skills;
