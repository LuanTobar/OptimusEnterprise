"use client";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className = "", hover = true }: CardProps) => {
  const hoverEffects = hover 
    ? "hover:border-primary hover:bg-surface/50 hover:shadow-[0_0_30px_rgba(57,255,20,0.2)] transition-all duration-300" 
    : "";

  return (
    <div 
      className={`bg-surface/30 border border-secondary/30 rounded-xl p-6 backdrop-blur-sm ${hoverEffects} ${className}`}
    >
      {children}
    </div>
  );
};
