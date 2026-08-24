# Sistema de Requerimientos y Proyectos de Estadías — Alfredo Rosas Espinosa

Plataforma web para la presentación de perfil profesional, proyectos desarrollados y recepción de propuestas para Estadías Profesionales de la **Ingeniería en Desarrollo y Gestión de Software** (Universidad Tecnológica del Centro de Veracruz). Desarrollado por **Alfredo Rosas Espinosa** (`@alfrerose.dev`).

Esta SPA (Single Page Application) sirve como punto de vinculación técnica con asesores empresariales e instituciones durante el periodo de estadías (Enero - Abril 2027).

---

## Secciones del sitio

- **Hero** — Presentación principal y objetivos para el periodo de estadías profesionales.
- **About me** — Perfil profesional, formación académica, metodologías de desarrollo, principios de arquitectura de software y trabajo en equipo.
- **Tech Stack** — Lenguajes, frameworks, bases de datos y herramientas de desarrollo.
- **Proyectos Realizados** — Muestra de desarrollos previos y proyectos integradores destacados.
- **Contacto** — Medios oficiales de comunicación directa para vinculación empresarial y seguimiento académico.

---

## Stack tecnológico

- **Frontend:** React 19 + Vite 8
- **Gestor de paquetes:** pnpm
- **Linter / Calidad de código:** oxlint
- **Insumos visuales:** [skillicons.dev](https://skillicons.dev)

---

## Configuración local

```bash
pnpm install   # Instalar dependencias del proyecto
pnpm dev       # Iniciar servidor de desarrollo local
pnpm lint      # Ejecutar oxlint para validación de código
pnpm build     # Generar build de producción en dist/
pnpm preview   # Previsualizar el build de producción en local
