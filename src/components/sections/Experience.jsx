import React from 'react';
import { motion } from 'framer-motion';

const Experience = ({ id }) => {
  const experiences = [
    {
      title: "AICTE Virtual Internship on Artificial Intelligence & Machine Learning",
      company: "AICTE & Edunet Foundation (in collaboration with IBM SkillsBuild)",
      companyLink:"https://drive.google.com/file/d/1PeQfTatVRNRBSavNgIwM9G0KDXKtPtl6/view?usp=sharing",
      type: "Certificate",
      description: [
        "Completed a 6-week internship program focused on AI and ML fundamentals",
        "Learned concepts of supervised learning, unsupervised learning, and introduction to deep learning",
        "Worked on hands-on projects applying machine learning techniques on datasets",
        "Earned the IBM Artificial Intelligence Fundamentals certification alongside the internship"
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
            <span className='text-lg font-medium text-[var(--color-hover)]'>04. </span>
            Experience
        </div>

        <div className="flex flex-col gap-8">
          {experiences.map((experience, index) => (
            <div 
              key={index}
              className="bg-[var(--color-card-bg)] p-6 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-[var(--color-hover)] font-semibold text-lg">
                  {experience.title}
                </h3>
                <span className="text-[var(--color-text)] opacity-75 hover:text-[var(--color-hover)]">
                  <a href={experience.companyLink} target='_blank'>{experience.company} {experience.type && `• ${experience.type}`}</a>
                </span>
              </div>
              
              <ul className="list-disc list-inside space-y-2 text-[var(--color-text)]">
                {experience.description.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-sm md:text-base">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
