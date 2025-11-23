import { Service, TechStack, Metric } from "./types";

export const BRAND = {
  name: "Optimus",
  tagline: "De la Fricción a la Fusión: Soluciones Tecnológicas que Impulsan tu Negocio",
  description:
    "Fusionamos la agilidad No-Code con el rigor Enterprise para entregar soluciones ágiles que convierten tus retos operativos en retorno de inversión cuantificable",
} as const;

export const SERVICES: Service[] = [
  {
    id: "automation",
    title: "Eficiencia Operativa X10",
    description:
      "Eliminamos tareas manuales y repetitivas. Implementamos flujos de trabajo inteligentes (código y No-Code) para liberar a tu equipo y multiplicar la productividad.",
    icon: "⚡",
    benefits: [
      "Automatización end-to-end",
      "Integración de sistemas",
      "Reducción de errores humanos",
    ],
  },
  {
    id: "dashboards",
    title: "Inteligencia de Negocio en Tiempo Real",
    description:
      "Convertimos tus datos dispersos en Cuadros de Mando (Dashboards) estratégicos. Toma decisiones basadas en métricas clave (KPIs) con visualizaciones claras y accionables.",
    icon: "📊",
    benefits: [
      "Dashboards personalizados",
      "KPIs en tiempo real",
      "Data Warehouse optimizado",
    ],
  },
  {
    id: "web",
    title: "Presencia Digital de Alto Rendimiento",
    description:
      "Desarrollamos plataformas web con enfoque en la conversión y el negocio. Diseñamos experiencias modernas y robustas, optimizadas para la captación y la autoridad de marca.",
    icon: "🚀",
    benefits: [
      "Arquitectura escalable",
      "SEO optimizado",
      "Conversión maximizada",
    ],
  },
  {
    id: "ai-ml",
    title: "Innovación Predictiva Aplicada",
    description:
      "Implementamos soluciones de Machine Learning e IA para optimizar procesos complejos, desde la previsión de ventas hasta la clasificación de documentos. La inteligencia artificial al servicio de tu rentabilidad.",
    icon: "🤖",
    benefits: [
      "Modelos predictivos",
      "Procesamiento de lenguaje natural",
      "Computer Vision",
    ],
  },
];

export const TECH_STACK: TechStack[] = [
  { name: "Google Cloud", category: "Cloud" },
  { name: "AWS", category: "Cloud" },
  { name: "Python", category: "Backend" },
  { name: "n8n", category: "Automation" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "Next.js", category: "Frontend" },
];

export const METRICS: Metric[] = [
  { value: "30", label: "Eficiencia", prefix: "+", suffix: "%" },
  { value: "50", label: "Reducción de Costes", prefix: "-", suffix: "%" },
  { value: "10", label: "Tiempo de Implementación", suffix: " días" },
  { value: "100", label: "Satisfacción", suffix: "%" },
];

export const CONTACT = {
  email: "contacto@optimus.tech",
  cta: "Agenda tu Consultoría Estratégica",
} as const;
