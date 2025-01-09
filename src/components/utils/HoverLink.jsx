import React from 'react'
import { useState } from 'react'
import {motion} from 'framer-motion'

const HoverLink = ({text, link}) => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div className='inline-block max-w-fit' onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)}>
        <a href={link} className="text-lg text-[var(--color-hover)] no-underline font-semibold">{text}</a>
        <div className={`border-t-2 border-[var(--color-hover)] rounded-xl transition-all duration-200 ease-in-out ${isHovered?`w-full`:`w-0`}`}></div>
    </motion.div>
  )
}

export default HoverLink