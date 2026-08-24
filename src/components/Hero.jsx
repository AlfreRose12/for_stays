import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-name">
          <span className="hero-name-highlight">Alfredo Rosas Espinosa</span>
          <span className="hero-cursor">|</span>
        </h1>

        <p className="hero-subtitle">
          Estudiante de Ingeniería en Desarrollo y Gestión de Software
        </p>

        <div className="hero-cta-container">
          <a href="#proyectos" className="hero-btn primary-btn">
            Ver Proyectos
          </a>
          <a href="#contacto" className="hero-btn secondary-btn">
            Contactar
          </a>
        </div>
      </div>

      <a href="#sobre-mi" className="hero-scroll-indicator" aria-label="Desplazarse hacia abajo">
        <span className="scroll-text">Desplázate</span>
        <span className="scroll-arrow"></span>
      </a>
    </section>
  )
}