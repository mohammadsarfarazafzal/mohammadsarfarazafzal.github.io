import React from 'react'

const SkillCard = ({ icon: Icon, name }) => (
  <div className="relative group">
    <Icon className="md:w-8 md:h-8 w-6 h-6 text-[var(--color-text)] 
      hover:text-[var(--color-hover)] transition-all duration-300 
      hover:scale-110" 
    />
    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
      opacity-0 group-hover:opacity-100 transition-opacity duration-300 
      text-xs text-[var(--color-text)] whitespace-nowrap bg-[var(--color-card-bg)] 
      px-2 py-1 rounded-md z-10">
      {name}
    </span>
  </div>
);

export default SkillCard