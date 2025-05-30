// components/Hero.js
import { Container, Carousel } from 'react-bootstrap'

export default function Hero() {
  const slides = [
    {
      title: "Welcome to",
      titleHighlight: "IBADUR RAHMAN ACADEMY",
      description: "Welcome to Ibadur Rahman School, where we nurture curiosity and foster a love for learning. Join us in our mission to create a supportive environment that inspires students to achieve their full potential.",
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
        minHeight: '600px',
        background: 'linear-gradient(rgba(9, 10, 70, 0.9), rgba(9, 10, 70, 0.9)), url(/images/hero-bg.jpg) center/cover',
        backgroundBlendMode: 'overlay',
        backgroundColor: '#090A46'
      }}
    >
      <Container>
        <div className="text-center">
          <h3 className="display-4 mb-4 text-white">
            Welcome to
          </h3>
          <h1 className="display-1 fw-bold mb-4 text-white" >
            IBADUR RAHMAN ACADEMY
          </h1>
          <p className="lead mb-5 text-white" style={{ fontSize: '1.5rem' }}>
            Welcome to Ibadur Rahman School, where we nurture curiosity and foster a love for learning.
            <br />
            Join us in our mission to create a supportive environment that inspires students to achieve their
            <br />
            full potential.
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
            Learn More
          </button>
        </div>
      </Container>
    </section>
  )
}