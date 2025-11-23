"use client";

import { Section } from "@/components/layout/Section";

export const Problem = () => {
  const painPoints = [
    "Procesos manuales que consumen tiempo valioso",
    "Datos dispersos sin visibilidad clara",
    "Tecnología obsoleta que limita el crecimiento",
    "Falta de automatización en tareas repetitivas",
  ];

  return (
    <Section id="problem">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-4 py-2 bg-secondary/20 border border-secondary rounded-full mb-8">
          <span className="text-primary font-mono text-sm">⚠ ANÁLISIS</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Tu Tecnología No Debería Ser un{" "}
          <span className="text-primary text-glow">Cuello de Botella</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Las empresas medianas están atrapadas entre la agilidad de las startups 
          y los recursos de las grandes corporaciones. La "mediocridad digital" 
          no es solo costosa, es una desventaja competitiva.
        </p>

        <div className="grid md:grid-cols-2 gap-4 text-left">
          {painPoints.map((point, idx) => (
            <div 
              key={idx}
              className="flex items-start p-4 bg-surface/30 border border-secondary/30 rounded-lg hover:border-primary/30 transition-colors"
            >
              <span className="text-primary text-2xl mr-4">✕</span>
              <span className="text-gray-300">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
