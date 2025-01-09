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
            className="lg:px-28 px-8 my-16 flex flex-col items-center"
            id={id}
        >
            <div className='text-2xl text-[var(--color-head-text)] font-bold mb-12 self-start'>
                <span className='text-lg font-medium text-[var(--color-hover)]'>02.</span> Featured Projects
            </div>
            <Card 
                name={"Acapellas"} 
                desc={"An innovative audio player app inspired by Spotify that offers a unique experience by allowing users to listen to songs without music, focusing solely on vocals. Built using React, it highlights creativity and functionality in modern app development."} 
                img={"/acapellas.png"} 
                tech={["React", "CSS3", "Git", "GitHub", "TailwindCSS"]} 
                github={"https://github.com/mohammadsarfarazafzal/acapellas"} 
                link={"https://mohammadsarfarazafzal.github.io/acapellas/"} 
            />
            <Card 
                name={"Taqs"} 
                desc={"Taqs is a responsive weather web app delivering real-time updates on temperature, humidity, and wind speed. Users can check weather conditions via location detection or manual input. With its interactive UI and device optimization, Taqs offers a seamless and user-friendly experience"} 
                img={"/taqs.png"} 
                tech={["HTML5", "CSS3", "JavaScript", "API"]} 
                github={"https://github.com/mohammadsarfarazafzal/taqs"} 
                link={"https://taqs.onrender.com"} 
            />
            {isShow ? (
                <div className='flex flex-col items-center'>
                    <Card 
                        name={"Google Result Page Clone Portfolio"} 
                        desc={"Crafted a personal portfolio website inspired by the Google Search Result Page as it appeared in early 2024. This project highlights my front-end development skills with a focus on responsive design, creativity, and attention to detail."} 
                        img={"/google.png"} 
                        tech={["HTML5", "CSS3", "JavaScript", "GitHub"]} 
                        github={"https://github.com/mohammadsarfarazafzal/portfoliogoogle"} 
                        link={"https://mohammadsarfarazafzal.onrender.com"} 
                    />
                    <Card 
                        name={"FIFO Page Replacement Algorithm Implementation"} 
                        desc={"A Python application to simulate the FIFO (First In, First Out) page replacement algorithm for multiple reference strings stored in a CSV file. Calculates and analyzes hit/miss counts and ratios across varying frame sizes."} 
                        img={"/fifo.png"} 
                        tech={["Python", "Pandas", "Operating System", "Teamwork"]} 
                        github={"https://github.com/mohammadsarfarazafzal/fifo"} 
                        link={"https://qr.ae/pYttsu"} 
                    />
                    <Card 
                        name={"Lay's-Inspired Front-End Hackathon Project"} 
                        desc={"A responsive and visually appealing website inspired by the official Lay's website, developed during a frontend hackathon with a team of three. Leveraged HTML, CSS, Bootstrap, and JavaScript to replicate Lay's branding while adding unique interactive elements."} 
                        img={"/lays.png"} 
                        tech={["Bootstrap", "Teamwork", "JavaScript", "HTML5", "CSS3"]} 
                        github={"https://github.com/mohammadsarfarazafzal/lays"} 
                        link={"https://piousboyslays.netlify.app/"} 
                    />
                    <div className="w-32 h-14 mb-16"><Button name={"View Less"} onClick={() => setShow(!isShow)} /></div>
                </div>
            ) : (
                <div className="w-32 h-14 mb-16">
                    <Button name={"View More"} onClick={() => setShow(!isShow)} />
                </div>
            )}
        </motion.div>
    );
};

export default Projects;