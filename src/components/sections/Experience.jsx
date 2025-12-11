import React from 'react';
import { motion } from 'framer-motion';

const Experience = ({ id }) => {
  const experiences = [
    {
      title: "Infosys Springboard Virtual Internship 6.0",
      company: "Infosys Springboard",
      duration: "Sep 2025 – Nov 2025",
      companyLink: "https://infyspringboard.onwingspan.com/web/en/page/home",
      certificateLink: null,
      description: [
        "Collaborated with 5-member cross-functional team to develop enterprise study collaboration platform serving 100+ users with 99% uptime",
        "Engineered 50+ RESTful API endpoints using Spring Boot and Hibernate with JWT authentication, securing user sessions with BCrypt hashing and role-based access control",
        "Built responsive React frontend with TypeScript by integrating STOMP protocol for real-time messaging, achieving instant delivery to 100+ concurrent users",
        "Prepared technical documentation and test reports achieving 85% code coverage, reducing developer onboarding time by 60% following Agile methodology"
      ]
    },
    {
      title: "Java Full Stack Web Development Training & Internship",
      company: "Globsyn Finishing School",
      duration: "3 Months",
      companyLink: "https://www.globsynfinishingschool.com/",
      certificateLink: "https://drive.google.com/file/d/1GYChPxYXpVx5XDWa40nGxxf0OxRPLU9U/view?usp=sharing",
      description: [
        "Completed technical training focused on Java Full Stack Development with ReactJS",
        "Learned core Java alongside ReactJS, JDBC and frameworks such as Spring Boot and Hibernate",
        "Developed real-world, full-stack web applications from the ground up",
        "Integrated MySQL databases and deployed applications on local servers for hands-on practice"
      ]
    },
    {
      title: "AICTE Virtual Internship on Artificial Intelligence & Machine Learning",
      company: "AICTE & Edunet Foundation (in collaboration with IBM SkillsBuild)",
      duration: "6 Weeks",
      companyLink: "https://edunetfoundation.org/",
      certificateLink: "https://drive.google.com/file/d/1PeQfTatVRNRBSavNgIwM9G0KDXKtPtl6/view?usp=sharing",
      description: [
        "Completed internship program focused on AI and ML fundamentals",
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
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                <div className='flex flex-col'>
                  <h3 className="text-[var(--color-hover)] font-semibold text-lg">
                    {experience.title}
                  </h3>
                  <span className="text-[var(--color-text)] opacity-75 hover:text-[var(--color-hover)] transition-colors">
                    <a href={experience.companyLink} target='_blank' rel="noopener noreferrer">
                      {experience.company}
                    </a>
                  </span>
                  <span className="text-[var(--color-text)] opacity-60 text-sm mt-1">
                    {experience.duration}
                  </span>
                </div>
                <span className="text-[var(--color-text)] opacity-75 hover:text-[var(--color-hover)] transition-colors whitespace-nowrap">
                  {experience.certificateLink ? (
                    <a href={experience.certificateLink} target='_blank' rel="noopener noreferrer">
                      View Certificate →
                    </a>
                  ) : (
                    <span className="opacity-50">Certificate Pending</span>
                  )}
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