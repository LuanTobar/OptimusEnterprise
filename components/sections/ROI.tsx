"use client";

import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { METRICS } from "@/domain/constants";

export const ROI = () => {
  return (
    <Section id="roi">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          ¿Qué Significa esto para{" "}
          <span className="text-primary text-glow">tu Negocio?</span>
        </h2>
        <p className="text-xl text-gray-400">
          ROI Cuantificable, no solo promesas
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {METRICS.map((metric, idx) => (
          <Card key={idx} hover={false} className="text-center">
            <div className="text-5xl font-bold text-primary mb-4 text-glow">
              {metric.prefix}
              {metric.value}
              {metric.suffix}
            </div>
            <div className="text-gray-300 font-semibold">
              {metric.label}
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-16 max-w-3xl mx-auto">
        <Card className="bg-gradient-to-r from-surface/50 to-secondary/20">
          <div className="text-center">
            <p className="text-2xl font-semibold text-white mb-4">
              "Desde que implementamos las soluciones de Optimus, 
              nuestros procesos operativos son 3x más eficientes"
            </p>
            <p className="text-gray-400 font-mono">
              — CTO, Empresa Tecnológica B2B
            </p>
          </div>
        </Card>
      </div>
    </Section>
  );
};
