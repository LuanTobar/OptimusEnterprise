"use client";

import { BRAND, CONTACT, SERVICES } from "@/domain/constants";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-secondary/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">{BRAND.name}</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transformamos tus desafíos operativos en ventajas competitivas cuantificables.
            </p>
            <a 
              href={`mailto:${CONTACT.email}`}
              className="text-primary hover:text-glow transition-all"
            >
              {CONTACT.email}
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Servicios</h4>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a 
                    href={`#${service.id}`}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Aviso Legal
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary/30 pt-8">
          <p className="text-center text-gray-500 text-sm font-mono">
            © {currentYear} {BRAND.name}. Soluciones Tecnológicas B2B.
          </p>
        </div>
      </div>
    </footer>
  );
};
