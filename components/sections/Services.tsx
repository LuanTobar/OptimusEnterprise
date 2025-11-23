"use client";

import { Section } from "@/components/layout/Section";
import { ServiceCard } from "@/components/features/ServiceCard";
import { SERVICES } from "@/domain/constants";

export const Services = () => {
  return (
    <Section id="services" dark>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Los 4 Pilares de la{" "}
          <span className="text-primary text-glow">Transformación Optimus</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Soluciones tecnológicas end-to-end diseñadas para impulsar tu negocio
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </Section>
  );
};
