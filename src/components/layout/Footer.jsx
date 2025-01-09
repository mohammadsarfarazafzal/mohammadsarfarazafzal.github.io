import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[var(--color-background)] h-14 font-mono">
        <div className='flex justify-center items-center text-sm text-[var(--color-text)]'>
            <p>
                Developed by <a href="https://github.com/mohammadsarfarazafzal" target="_blank" className='no-underline hover:text-[var(--color-hover)]'>Mohammad Sarfaraz Afzal</a>
            </p>
        </div>
    </footer>
  )
}

export default Footer