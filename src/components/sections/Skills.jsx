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
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { icon: SiC, name: 'C' },
        { icon: FaJava, name: 'Java' },
        { icon: SiPython, name: 'Python' },
        { icon: SiJavascript, name: 'JavaScript' }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { icon: SiHtml5, name: 'HTML5' },
        { icon: SiCss3, name: 'CSS3' },
        { icon: SiReact, name: 'React' },
        { icon: SiNextdotjs, name: 'Next.js' },
        { icon: SiTailwindcss, name: 'Tailwind CSS' },
        { icon: SiBootstrap, name: 'Bootstrap' }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { icon: SiNodedotjs, name: 'Node.js' },
        { icon: SiExpress, name: 'Express.js' },
        { icon: SiSpringboot, name: 'Spring Boot' },
        { icon: SiHibernate, name: 'Hibernate' }
      ]
    },
    {
      title: "Databases",
      skills: [
        { icon: SiMysql, name: 'MySQL' },
        { icon: SiMongodb, name: 'MongoDB' },
        { icon: SiMongoose, name: 'Mongoose' }
      ]
    },
    {
      title: "Development Tools",
      skills: [
        { icon: SiGit, name: 'Git' },
        { icon: SiGithub, name: 'GitHub' },
        { icon: SiEclipseide, name: 'Eclipse' },
        { icon: VscVscode, name: 'VS Code' },
        { icon: SiIntellijidea, name: 'IntelliJ IDEA' },
        { icon: SiJupyter, name: 'Jupyter' }
      ]
    },
    {
      title: "Additional Tools",
      skills: [
        { icon: SiPostman, name: 'Postman' },
        { icon: SiRedhat, name: 'Red Hat' },
        { icon: SiTensorflow, name: 'TensorFlow' }
      ]
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
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard 
                    key={skillIndex} 
                    icon={skill.icon} 
                    name={skill.name}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;