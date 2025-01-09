import React from "react";

const Button = ({ name, onClick }) => {
    return (
        <div 
            onClick={onClick}
            className="flex justify-center items-center border h-full w-full rounded border-[var(--color-hover)] transition ease-in-out delay-75 hover:shadow-[3px_3px_0_0_rgba(0,0,0,0.3)] hover:shadow-[var(--color-hover)] hover:-translate-x-1 hover:-translate-y-1 cursor-pointer text-center text-[var(--color-hover)]"
        >
            {name}
        </div>
    );
};

export default Button;