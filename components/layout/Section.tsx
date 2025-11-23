interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export const Section = ({ 
  children, 
  className = "", 
  id,
  dark = false 
}: SectionProps) => {
  const bgStyle = dark ? "bg-surface/50" : "bg-background";
  
  return (
    <section 
      id={id}
      className={`py-20 px-6 md:px-12 lg:px-24 ${bgStyle} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};
