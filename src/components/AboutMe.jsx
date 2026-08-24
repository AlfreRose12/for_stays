import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation'
import './AboutMe.css'

const competencies = [
  {
    title: 'Metodologías Ágiles',
    description: 'Gestión de proyectos con Scrum y Kanban para garantizar entregables oportunos y control de sprints.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
  {
    title: 'Arquitectura & Código Limpio',
    description: 'Diseño modular basado en principios SOLID, desacoplamiento y patrones de software mantenibles.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    title: 'Trabajo Colaborativo',
    description: 'Comunicación asertiva, integración rápida a equipos multidisciplinarios y adaptabilidad a flujos de trabajo.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
]

export default function AboutMe() {
  const sectionRef = useScrollAnimation()
  const listRef = useStaggerAnimation(competencies.length, 0.12)

  return (
    <section id="sobre-mi" className="aboutme-section" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">Sobre mí</h2>
        <p className="section-subtitle">Perfil profesional y enfoque de desarrollo</p>

        <div className="aboutme-content-wrapper">
          {/* Bloque Izquierdo: Presentación en texto fluido */}
          <div className="aboutme-bio-block">
            <p className="aboutme-text">
              Soy estudiante de la <strong>Ingeniería en Desarrollo y Gestión de Software</strong> en la Universidad Tecnológica del Centro de Veracruz (UTCV). Mi enfoque profesional está orientado al diseño e implementación de sistemas escalables que resuelvan necesidades operativas reales dentro de las organizaciones.
            </p>
            <p className="aboutme-text">
              Cuento con una sólida formación en desarrollo de software, priorizando la estructura del código, el levantamiento preciso de requerimientos y la adopción de estándares modernos de la industria.
            </p>

            {/* Ficha destacada del periodo de estadías */}
            <div className="aboutme-badge-box">
              <div>
                <span className="badge-label">Disponibilidad</span>
                <p className="badge-dates">Estadía profesional de tiempo completo a partir de enero de 2027.</p>
              </div>
            </div>
          </div>

          {/* Bloque Derecho: Pilares de competencia técnica */}
          <div className="aboutme-competencies-list" ref={listRef}>
            {competencies.map((item) => (
              <div className="competency-item" key={item.title}>
                <div className="competency-icon">{item.icon}</div>
                <div className="competency-details">
                  <h3 className="competency-title">{item.title}</h3>
                  <p className="competency-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}