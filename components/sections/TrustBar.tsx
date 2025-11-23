"use client";

import { TECH_STACK } from "@/domain/constants";

export const TrustBar = () => {
  return (
    <div className="py-8 border-y border-secondary/20 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-400 text-sm mb-6 font-mono">
          TECNOLOGÍAS DE CONFIANZA
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {TECH_STACK.map((tech) => (
            <div 
              key={tech.name}
              className="text-gray-400 hover:text-primary transition-colors duration-300 font-semibold text-sm md:text-base"
            >
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
