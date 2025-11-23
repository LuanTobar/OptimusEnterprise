"use client";

import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/domain/constants";

export const FinalCTA = () => {
  const handleCTA = () => {
    window.location.href = `mailto:${CONTACT.email}?subject=Transformación Digital Optimus`;
  };

  return (
    <Section id="cta">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-surface via-secondary/20 to-surface border border-primary/30 p-16 text-center">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(57,255,20,0.1),transparent_70%)]"></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para{" "}
            <span className="text-primary text-glow">Transformar</span>
            <br />
            tu Operación?
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Agenda una consultoría estratégica gratuita y descubre cómo 
            podemos multiplicar tu eficiencia operativa.
          </p>
          
          <Button onClick={handleCTA} variant="primary">
            Comienza tu Evaluación Gratuita
          </Button>
          
          <p className="text-sm text-gray-500 mt-6 font-mono">
            Sin compromiso · Respuesta en 24h
          </p>
        </div>
      </div>
    </Section>
  );
};
