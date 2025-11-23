# Optimus - Consultoría Tecnológica B2B

Sitio web corporativo desarrollado con Next.js 14, TypeScript y Tailwind CSS.

## 🏗️ Arquitectura

Proyecto estructurado siguiendo principios **SOLID** y **Clean Code**:

- **Domain Layer**: Tipos y constantes de negocio (`/domain`)
- **Components**: Componentes reutilizables con responsabilidad única
  - `/components/ui`: Componentes base (Button, Card)
  - `/components/layout`: Componentes de estructura (Section)
  - `/components/features`: Componentes específicos (ServiceCard)
  - `/components/sections`: Secciones de página (Hero, Services, etc.)

## 🚀 Instalación

```bash
npm install
```

## 💻 Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## 🏭 Producción

```bash
npm run build
npm start
```

## 🎨 Paleta de Colores

- **Background**: `#000000` (Negro absoluto)
- **Surface**: `#0F0F0F` (Gris muy oscuro)
- **Primary**: `#39FF14` (Verde neón)
- **Secondary**: `#4B5320` (Verde olivo oscuro)

## 📦 Stack Tecnológico

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React 18

## 🧩 Principios Aplicados

1. **SRP**: Cada componente tiene una única responsabilidad
2. **OCP**: Componentes extensibles sin modificación
3. **LSP**: Componentes intercambiables respetan contratos
4. **ISP**: Interfaces específicas, no genéricas
5. **DIP**: Dependencias hacia abstracciones (types)

## 📁 Estructura

```
optimus-project/
├── app/              # Next.js App Router
├── components/       # Componentes React
│   ├── ui/          # Componentes base
│   ├── layout/      # Layouts
│   ├── features/    # Features específicas
│   └── sections/    # Secciones de página
├── domain/          # Lógica de dominio
└── public/          # Recursos estáticos
```
