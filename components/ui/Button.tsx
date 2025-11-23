"use client";

import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export const Button = ({ 
  variant = "primary", 
  children, 
  className = "",
  ...props 
}: ButtonProps) => {
  const baseStyles = "px-8 py-4 font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105";
  
  const variants = {
    primary: "bg-primary text-background hover:bg-primary/90 animate-glow-pulse",
    secondary: "bg-secondary text-white hover:bg-secondary/80 border border-primary/30",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
