import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };
    return (
            <motion.div className="px-28 py-16" initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15, ease: "easeIn", duration: 0.15 } } }}>
                <motion.h1 variants={itemVariants} className="text-base md:text-lg mb-6 text-[var(--color-hover)]" >Hi, my name is</motion.h1>
                <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl text-[var(--color-head-text)] font-bold mb-6">
                    Mohammad Sarfaraz Afzal.
                </motion.h1>
                <motion.p variants={itemVariants} className="text-3xl md:text-4xl text-[var(--color-text)] mb-8">
                    Specializing in Web Development, Web3, and Machine Learning.
                </motion.p>
                <motion.p variants={itemVariants} className="text-lg text-[var(--color-text)] mb-8 w-1/2 text-justify">
                I’m a final-year Computer Science student from <a href="https://www.google.com/search?q=mckvie&oq=mckvie&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg9MgYIAhBFGDzSAQc4MDZqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8" className="text-[var(--color-hover)] transition ease-in-out hover:underline">MCKVIE</a>, with a keen interest in web development, machine learning, and blockchain technologies. Eager to take on challenges, I’m passionate about creating meaningful digital experiences. When I’m not coding, you’ll find me enjoying gaming or catching up on movies.
                </motion.p>
                <div className="flex justify-left gap-8">
                    <motion.a variants={itemVariants}
                        href="https://github.com/mohammadsarfarazafzal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2"
                    >
                        <Github className="w-8 h-8 text-[var(--color-text)] transition ease-in-out delay-0 hover:text-[var(--color-hover)] hover:-translate-y-2 duration-200" />
                    </motion.a>
                    <motion.a variants={itemVariants}
                        href="https://linkedin.com/in/mdsarfarazafzal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2"
                    >
                        <Linkedin className="w-8 h-8 text-[var(--color-text)] transition ease-in-out delay-0 hover:text-[var(--color-hover)] hover:-translate-y-2 duration-200" />
                    </motion.a>
                    <motion.a variants={itemVariants} href="mailto:mohammadsarfarazafzal@gmail.com" className="p-2">
                        <Mail className="w-8 h-8 text-[var(--color-text)] transition ease-in-out delay-0 hover:text-[var(--color-hover)] hover:-translate-y-2 duration-200" />
                    </motion.a>
                </div>
            </motion.div>
    );
};

export default Hero;
