"use client";

import { Section } from "@/components/layout/Section";

export const Technology = () => {
  const technologies = [
    {
      category: "Automatización",
      tools: ["n8n", "Zapier", "Python Scripts", "APIs REST"],
    },
    {
      category: "Data & Analytics",
      tools: ["BigQuery", "PostgreSQL", "Power BI", "Tableau"],
    },
    {
      category: "IA/ML",
      tools: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API"],
    },
    {
      category: "Cloud & DevOps",
      tools: ["GCP", "AWS", "Docker", "Kubernetes"],
    },
  ];

  return (
    <Section id="technology" dark>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Tecnología de{" "}
          <span className="text-primary text-glow">Vanguardia</span>,
          <br />
          Soluciones Tangibles
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Nuestro stack tecnológico está diseñado para entregar 
          resultados medibles desde el primer día
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {technologies.map((tech, idx) => (
          <div 
            key={idx}
            className="bg-surface/30 border border-secondary/30 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
          >
            <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-glow">
              {tech.category}
            </h3>
            <ul className="space-y-2">
              {tech.tools.map((tool, toolIdx) => (
                <li 
                  key={toolIdx}
                  className="text-gray-400 text-sm flex items-center"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="inline-block bg-surface/50 border border-primary/30 rounded-2xl p-8 max-w-2xl">
          <p className="text-lg text-gray-300 leading-relaxed">
            <span className="text-primary font-bold">Expertise end-to-end:</span> Desde 
            Data Science avanzado hasta automatización de procesos completos. 
            Si es un problema tecnológico, tenemos la solución práctica y 
            lista para producción.
          </p>
        </div>
      </div>
    </Section>
  );
};
