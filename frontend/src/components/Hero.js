// components/Hero.js
import { Container, Carousel } from 'react-bootstrap'

export default function Hero() {
  const slides = [
    {
      title: "Welcome to",
      titleHighlight: "IBADUR RAHMAN ACADEMY",
      description: "Integrity, Belief, Accountability, Discipline, Unity of purpose and Responsibility are our Core Values",
      image: "/images/hero-bg.jpg"
    },
    {
      title: "Excellence in",
      titleHighlight: "ISLAMIC EDUCATION",
      description: "Combining traditional Islamic values with modern academic excellence to shape tomorrow's leaders.",
      image: "/images/hero-bg2.jpg"
    },
    {
      title: "Building",
      titleHighlight: "FUTURE LEADERS",
      description: "Empowering students with knowledge, character, and skills for success in this world and the hereafter.",
      image: "/images/hero-bg3.jpg"
    }
  ]

  return (
    <section 
      className="hero-section text-white d-flex align-items-center position-relative"
      style={{
        minHeight: '85vh',
        padding: '0 1rem',
        background: 'linear-gradient(rgba(0, 10, 30, 0.80), rgba(0, 10, 80, 0.5)), url(/images/hero-bg.jpg) center/cover no-repeat',
        overflowX: 'hidden',
      }}
    >
      {/* Subtle pattern overlay */}
      <div 
        className="position-absolute w-100 h-100"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)',
          top: 0,
          left: 0,
          zIndex: 1
        }}
      />
      <Container className="position-relative" style={{ zIndex: 3 }}>
        <div className="text-center">
          <h3 className="display-4 mb-4 text-white" 
          style={{ fontSize: 'clamp(1.2rem, 4vw, 2rem)' }}>
            Welcome to
          </h3>
          <h1 className="display-3 display-md-1 fw-bold mb-4 text-white" style={{fontSize: 'clamp(1.8rem, 6vw, 3.5rem)',
            textAlign: 'center',
            whiteSpace: 'normal',
            wordBreak: 'break-word',
            overflowWrap: 'break-word',
          }}>
            IBADUR RAHMAN ACADEMY
          </h1>
          <p 
            className="lead mb-5 text-white" 
            style={{ fontSize: 'clamp(1rem, 3.5vw, 1.4rem)', lineHeight: '1.6' }}>
              Integrity, Belief, Accountability, Discipline, Unity of purpose and Responsibility are our Core Values.
          </p>
          <button 
            className="btn btn-lg px-5 py-3"
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              border: '2px solid white',
              borderRadius: '5px',
              fontSize: '1.2rem'
            }}
          >
            Reach Out
          </button>
        </div>
      </Container>
    </section>
  )
}