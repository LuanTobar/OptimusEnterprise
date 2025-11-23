"use client";

import { Card } from "@/components/ui/Card";
import { Service } from "@/domain/types";

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Card className="h-full group cursor-pointer">
      <div className="flex flex-col h-full">
        <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-glow transition-all duration-300">
          {service.title}
        </h3>
        
        <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
          {service.description}
        </p>
        
        <ul className="space-y-2">
          {service.benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start text-sm text-gray-400">
              <span className="text-primary mr-2">▸</span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};
