import React from "react";
import { motion } from "framer-motion";
import SkillCard from "../utils/SkillCard";
import {
  SiC,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiHibernate,
  SiMysql,
  SiMongodb,
  SiMongoose,
  SiGit,
  SiGithub,
  SiEclipseide,
  SiIntellijidea,
  SiJupyter,
  SiPostman,
  SiRedhat,
  SiTensorflow,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const Skills = ({ id }) => {
  const skillCategories = [    {
      title: "Programming Languages",
      skills: [SiC, FaJava, SiPython, SiJavascript]
    },
    {
      title: "Frontend Development",
      skills: [SiHtml5, SiCss3, SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap]
    },
    {
      title: "Backend Development",
      skills: [SiNodedotjs, SiExpress, SiSpringboot, SiHibernate]
    },
    {
      title: "Databases",
      skills: [SiMysql, SiMongodb, SiMongoose]
    },
    {
      title: "Development Tools",
      skills: [SiGit, SiGithub, SiEclipseide, VscVscode, SiIntellijidea, SiJupyter]
    },    {
      title: "Additional Tools",
      skills: [SiPostman, SiRedhat, SiTensorflow]
    }
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
      <div className="flex flex-col w-full">        
        <div className='text-2xl text-[var(--color-head-text)] font-bold mb-6'>
          <span className='text-lg font-medium text-[var(--color-hover)]'>03. </span> 
          Technical Skills
        </div>
        
        <div className="flex flex-wrap justify-start gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-[var(--color-card-bg)] p-6 rounded-lg flex-grow basis-[calc(100%-2rem)] md:basis-[calc(50%-2rem)] lg:basis-[calc(33.333%-2rem)]">
              <h3 className="text-[var(--color-hover)] font-semibold mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((SkillIcon, skillIndex) => (
                  <SkillCard key={skillIndex} icon={SkillIcon} />
                ))}
              </div>
            </div>          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;