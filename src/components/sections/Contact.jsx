import React from 'react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'

const Contact = ({id}) => {
  return (
    <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeIn" }}
        id={id}
        className="lg:px-28 px-8 h-[38rem] my-18 flex flex-col justify-center items-center"
      >
        <div className='text-2xl text-[var(--color-head-text)] font-bold mb-6'><span className='text-lg font-medium text-[var(--color-hover)]'>04.</span> What's next?</div>
        <div className="text-5xl font-bold mb-8 text-[var(--color-head-text)]">
            Get In Touch
        </div>
        <div
            className="text-lg text-[var(--color-text)] mb-8 text-center"
          >
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll get back to you!
          </div>
        <div className="w-32 h-14">
          <a
            href="mailto:mohammadsarfarazafzal@gmail.com"
          >
            <Button name="Say Hello"  />
          </a>
          </div>
      </motion.div>
  )
}

export default Contact