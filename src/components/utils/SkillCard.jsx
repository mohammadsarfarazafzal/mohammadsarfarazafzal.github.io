import React from 'react'

const SkillCard = ({ icon: Icon, name }) => (
  <div className="flex flex-col items-center gap-2 group">
    <Icon className="md:w-8 md:h-8 w-6 h-6 text-[var(--color-text)] 
      hover:text-[var(--color-hover)] transition-all duration-300 
      hover:scale-110" 
    />
    <span className="text-xs text-center text-[var(--color-text)] 
      group-hover:text-[var(--color-hover)] transition-colors duration-300">
      {name}
    </span>
  </div>
);

export default SkillCard