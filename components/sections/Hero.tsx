"use client";

import { Button } from "@/components/ui/Button";
import { BRAND, CONTACT } from "@/domain/constants";
import { useEffect, useRef } from "react";


export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.fillStyle = "rgba(10, 10, 10, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(57, 255, 20, ${0.3 + Math.random() * 0.3})`;
        ctx.fill();

        particles.forEach((p2, j) => {
          if (i === j) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(57, 255, 20, ${0.1 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCTA = () => {
    window.location.href = `mailto:${CONTACT.email}?subject=Consultoría Estratégica Optimus`;
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Canvas de partículas conectadas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Gradientes de fondo más intensos */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0F0F0F] to-black"></div>

      {/* Manchas de luz verde más grandes */}
      <div className="absolute top-10 -left-20 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-10 -right-20 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "3s" }}></div>

      {/* Grid 3D con perspectiva */}
      <div className="absolute inset-0" style={{ perspective: "1000px" }}>
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(57,255,20,0.08)_2px,transparent_2px),linear-gradient(90deg,rgba(57,255,20,0.08)_2px,transparent_2px)] bg-[size:60px_60px]"
          style={{
            transform: "rotateX(60deg) translateZ(-200px)",
            transformOrigin: "center center",
          }}
        ></div>
      </div>

      {/* Hexágonos flotantes */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute border-2 border-primary/40"
            style={{
              width: `${80 + i * 20}px`,
              height: `${80 + i * 20}px`,
              left: `${10 + i * 12}%`,
              top: `${10 + (i % 3) * 30}%`,
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              animation: `float ${6 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Círculos concéntricos animados */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-primary/20"
            style={{
              width: `${300 + i * 150}px`,
              height: `${300 + i * 150}px`,
              animation: `ping ${3 + i}s cubic-bezier(0, 0, 0.2, 1) infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Líneas de escaneo */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan"></div>
      </div>

      {/* Código matrix mejorado
      <div className="absolute inset-0 opacity-10 font-mono text-xs text-primary overflow-hidden pointer-events-none">
        <div className="grid grid-cols-12 gap-4">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="animate-scroll-up space-y-1"
              style={{ animationDelay: `${i * 0.3}s`, animationDuration: `${15 + i}s` }}
            >
              {[...Array(30)].map((_, j) => (
                <div key={j}>
                  {Math.random().toString(36).substring(2, 15)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div> */}

      {/* Content con glassmorphism */}
      <div className="relative z-10 text-center max-w-5xl px-6 animate-slide-up mt-20">
        {/* Badge con efecto glass
        <div className="mb-6 inline-block">
          <span className="text-primary font-mono text-sm tracking-wider border border-primary/40 px-6 py-2 rounded-full bg-primary/5 backdrop-blur-md shadow-[0_0_30px_rgba(57,255,20,0.2)]">
            ⚡ {BRAND.name}
          </span>
        </div> */}

        {/* Título con múltiples efectos */}
        <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
          <span className="text-glow text-primary inline-block hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_40px_rgba(57,255,20,0.8)]">
            De la Fricción
          </span>
          <br />
          <span className="text-white inline-block hover:scale-105 transition-transform duration-300">
            a la Fusión
          </span>
        </h1>

        {/* Descripción en card glass */}
        <div className="mb-12 mx-auto max-w-3xl bg-surface/20 backdrop-blur-md border border-primary/20 rounded-2xl p-8 shadow-[0_0_50px_rgba(57,255,20,0.1)]">
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            {BRAND.description}
          </p>
        </div>

        {/* CTA mejorado */}
        <div className="flex flex-col items-center gap-4">
          <Button onClick={handleCTA} variant="primary" className="text-xl px-12 py-6 shadow-[0_0_50px_rgba(57,255,20,0.4)] hover:shadow-[0_0_70px_rgba(57,255,20,0.6)]">
            {CONTACT.cta} →
          </Button>
          {/* <p className="text-sm text-gray-500 font-mono">
            ✓ Sin compromiso · ✓ Respuesta en 24h
          </p> */}
        </div>

        {/* Estadísticas rápidas */}
        <div className="mt-16 mb-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {[
            { value: "10+", label: "Años Experiencia" },
            { value: "50+", label: "Proyectos" },
            { value: "98%", label: "Satisfacción" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-primary text-glow">{stat.value}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator mejorado
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-7 h-12 border-2 border-primary/60 rounded-full flex items-start justify-center p-2 bg-primary/5 backdrop-blur-sm shadow-[0_0_20px_rgba(57,255,20,0.3)]">
            <div className="w-1.5 h-4 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(57,255,20,0.8)]"></div>
          </div>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          33% { transform: translateY(-30px) translateX(20px) rotate(10deg); }
          66% { transform: translateY(-15px) translateX(-15px) rotate(-10deg); }
        }
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scan {
          0% { top: 0%; }
          100% { top: 100%; }
        }
        @keyframes ping {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        .animate-scroll-up {
          animation: scroll-up 20s linear infinite;
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
      `}</style>
    </div>
  );
};