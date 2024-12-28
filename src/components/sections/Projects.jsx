import React, { useState } from 'react';
import { motion } from 'framer-motion'
import Card from '../ui/Card';
import Button from '../ui/Button';

const Projects = ({id}) => {
    const [isShow, setShow] = useState(false);

    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeIn" }}
            className="px-28 my-17"
            id={id}
        >
            <div className='text-2xl text-[var(--color-head-text)] font-bold mb-6'>
                <span className='text-lg font-medium text-[var(--color-hover)]'>02.</span> Featured Projects
            </div>
            <Card 
                name={"Acapellas"} 
                desc={"An innovative audio player app inspired by Spotify that offers a unique experience by allowing users to listen to songs without music, focusing solely on vocals. Built using React, it highlights creativity and functionality in modern app development."} 
                img={"../../../src/assets/acapellas.png"} 
                tech={["React", "CSS3", "Git", "GitHub"]} 
                github={"https://github.com/mohammadsarfarazafzal/acapellas"} 
                link={"https://mohammadsarfarazafzal.github.io/acapellas/"} 
            />
            <Card 
                name={"Taqs"} 
                desc={"Taqs is a responsive weather web app delivering real-time updates on temperature, humidity, and wind speed. Users can check weather conditions via location detection or manual input. With its interactive UI and device optimization, Taqs offers a seamless and user-friendly experience"} 
                img={"../../../src/assets/taqs.png"} 
                tech={["HTML5", "CSS3", "JavaScript", "API"]} 
                github={"https://github.com/mohammadsarfarazafzal/taqs"} 
                link={"https://taqs.onrender.com"} 
            />
            {isShow ? (
                <div>
                    <Card 
                        name={"Google Result Page Clone Portfolio"} 
                        desc={"Crafted a personal portfolio website inspired by the Google Search Result Page as it appeared in early 2024. This project highlights my front-end development skills with a focus on responsive design, creativity, and attention to detail."} 
                        img={"../../../src/assets/google.png"} 
                        tech={["HTML5", "CSS3", "JavaScript", "GitHub"]} 
                        github={"https://github.com/mohammadsarfarazafzal/portfoliogoogle"} 
                        link={"https://mohammadsarfarazafzal.onrender.com"} 
                    />
                    <div className="flex justify-center items-center"><Button name={"View Less"} onClick={() => setShow(!isShow)} /></div>
                </div>
            ) : (
                <div className="flex justify-center items-center">
                    <Button name={"View More"} onClick={() => setShow(!isShow)} />
                </div>
            )}
        </motion.div>
    );
};

export default Projects;