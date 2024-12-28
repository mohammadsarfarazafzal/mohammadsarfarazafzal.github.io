import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from "lucide-react";
const Card = ({ name, desc, img, tech, github, link }) => {
    return (
        <motion.div initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeIn" }}
            className="my-16">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
                <div id='projectCover' className="w-full md:w-1/2">
                    <a href={link}><img src={img} alt={name} className="w-full h-auto rounded-lg" /></a>
                </div>
                <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6">
                    <h3 className="text-2xl text-[var(--color-hover)] font-bold mb-6">{name}</h3>
                    <p className="text-[var(--color-text)]">{desc}</p>
                    <div className="flex flex-wrap mt-6">
                        {tech.map((item, index) => (
                            <span key={index} className="text-[var(--color-text)] bg-[var(--color-card-bg)] bg-opacity-10 px-2 py-1 rounded-full text-sm mr-2 mb-2">{item}</span>
                        ))}
                    </div>
                    <div className="flex flex-wrap mt-6">
                        <a href={github} target="_blank" rel="noreferrer" className="cursor-pointer flex items-center text-[var(--color-text)] hover:text-[var(--color-hover)] mr-4">
                            <Github size={20} />
                            <span className="ml-2">Github</span>
                        </a>
                        <a href={link} target="_blank" rel="noreferrer" className="flex cursor-pointer items-center text-[var(--color-text)] hover:text-[var(--color-hover)]">
                            <ExternalLink size={20} />
                            <span className="ml-2">Live</span>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Card