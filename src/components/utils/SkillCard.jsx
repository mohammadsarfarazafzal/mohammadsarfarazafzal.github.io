import React from 'react'

const getSkillName = (Icon) => {
  const skillNames = {
    SiC: 'C',
    FaJava: 'Java',
    SiPython: 'Python',    
    SiJavascript: 'JavaScript',
    SiHtml5: 'HTML5',
    SiCss3: 'CSS3',
    SiReact: 'React',
    SiNextdotjs: 'Next.js',
    SiTailwindcss: 'Tailwind CSS',
    SiBootstrap: 'Bootstrap',
    SiNodedotjs: 'Node.js',
    SiExpress: 'Express.js',
    SiSpringboot: 'Spring Boot',
    SiHibernate: 'Hibernate',
    SiMysql: 'MySQL',
    SiMongodb: 'MongoDB',
    SiMongoose: 'Mongoose',
    SiGit: 'Git',
    SiGithub: 'GitHub',
    SiEclipseide: 'Eclipse',
    VscVscode: 'VS Code',
    SiIntellijidea: 'IntelliJ IDEA',
    SiJupyter: 'Jupyter',
    SiPostman: 'Postman',
    SiRedhat: 'Red Hat',
    SiTensorflow: 'TensorFlow'
  };

  return skillNames[Icon];
};

const SkillCard = ({ icon: Icon }) => (
  <div className="relative group">
    <Icon className="md:w-8 md:h-8 w-6 h-6 text-[var(--color-text)] 
      hover:text-[var(--color-hover)] transition-all duration-300 
      hover:scale-110" 
    />
    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
      opacity-0 group-hover:opacity-100 transition-opacity duration-300 
      text-xs text-[var(--color-text)] whitespace-nowrap bg-[var(--color-card-bg)] 
      px-2 py-1 rounded-md z-10">
      {getSkillName(Icon)}
    </span>
  </div>
);

export default SkillCard