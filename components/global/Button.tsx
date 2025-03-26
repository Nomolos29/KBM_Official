import Link from 'next/link';
import React from 'react'

export interface ButtonProps {
    icon?: React.ReactNode;
    onClick?: () => void;
    text?: string | undefined;
    url?: string;
    className?: string;
    filled?: boolean;
    outline?: boolean;
    whiteOutlineFill?: boolean;
    white?: boolean;
    shadow?: boolean;
    sm?: boolean;
    lg?: boolean;
}

const Button: React.FC<ButtonProps> = ({icon, text, filled, outline, sm, url, lg, white, shadow, onClick, whiteOutlineFill, className}) => {
  return (
    <Link href={url ? url : "#"}>
        <button 
            type="button"
            onClick={onClick}
            className={`
                ${filled && white ? "bg-white text-black" : filled ? "bg-black text-white" : white && "text-white"} 
                ${sm ? "px-2 py-1 gap-x-1" : lg ? "px-8 py-4 gap-x-4 font-medium" : "px-3 py-2 gap-x-2"} 
                ${outline && whiteOutlineFill ? "border-white text-white border-[2px]" : outline && "border-[2px]"} 
                ${shadow && "shadow-md"} 
                ${className} rounded-full flex items-center cursor-pointer`
            }
        >
            {text}
            {icon}
        </button>
    </Link>
  )
}

export default Button