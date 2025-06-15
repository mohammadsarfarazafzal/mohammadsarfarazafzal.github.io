import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'
import ContactModal from '../ui/ContactModal'

const Contact = ({id}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1, ease: "easeIn" }}
      id={id}
      className="lg:px-28 px-8 min-h-[38rem] my-18 flex flex-col justify-center items-center"
    >
      <div className='text-2xl text-[var(--color-head-text)] font-bold mb-6'>
        <span className='text-lg font-medium text-[var(--color-hover)]'>05.</span> 
        What's next?
      </div>
      <div className="text-5xl font-bold mb-8 text-[var(--color-head-text)]">
        Get In Touch
      </div>
      <div className="text-lg text-[var(--color-text)] mb-8 text-center max-w-xl">
        I'm currently looking for new opportunities. Whether you have a
        question or just want to say hi, I'll get back to you!
      </div>
      <div className="w-32 h-14 mb-16">
        <Button 
        name="Say Hello" 
        onClick={() => setIsModalOpen(true)}
      />
      </div>
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </motion.div>
  )
}

export default Contact