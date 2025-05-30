// app/page.js
'use client'

import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap'
import Hero from '../components/Hero'

export default function Home() {
  const departments = [
    {
      icon: '🔬',
      title: 'General Science',
      description: 'Discover how we provide quality education tailored to each student\'s unique needs and aspirations.'
    },
    {
      icon: '📚',
      title: 'General Arts',
      description: 'Our classrooms foster creativity, collaboration, and critical thinking among students of all ages.'
    },
    {
      icon: '🎨',
      title: 'Visual Arts',
      description: 'We offer diverse programs designed to meet the varying interests and goals of our students.'
    },
    {
      icon: '🏠',
      title: 'Home Economics',
      description: 'Our dedicated staff and resources ensure every student feels supported throughout their educational journey.'
    }
  ]

  const newsArticles = [
    {
      id: 1,
      title: 'SRC Week Celebration',
      description: 'Welcome to Ibadur Rahman School, where we nurture curiosity and foster a love for learning. Join us in our mission to create a supportive environment that inspires students to achieve their full potential.',
      image: '/images/news1.jpg'
    },
    {
      id: 2,
      title: 'Academic Excellence Awards 2025',
      description: 'Celebrating outstanding academic achievements of our students. Join us as we recognize the hard work and dedication of our brilliant minds.',
      image: '/images/news2.jpg'
    },
    {
      id: 3,
      title: 'Sports Day Success',
      description: 'Our annual sports day was a tremendous success with students showcasing their athletic abilities and team spirit.',
      image: '/images/news3.jpg'
    }
  ]

  const leadership = [
    {
      name: 'Mr. Bashiru Shehu',
      position: 'Headmaster',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      image: '/images/headmaster.jpg'
    },
    {
      name: 'Mr. Umar Ali',
      position: 'Assistant Headmaster',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      image: '/images/assistant1.jpg'
    },
    {
      name: 'Mrs. Mariam Issah',
      position: 'Assistant Headmistress',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      image: '/images/assistant2.jpg'
    },
    {
      name: 'Ustaaz',
      position: 'Imaam',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
      image: '/images/ustaaz.jpg'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Us Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={5} className="mb-4 mb-lg-0 order-2 order-lg-1">
              <img 
                src="/images/about-us.jpg" 
                alt="About Ibadur Rahman Academy" 
                className="img-fluid rounded shadow"
                style={{ width: '100%', height: 'auto' }}
              />
            </Col>
            <Col lg={7} className='order-1 order-lg-2'>
              <Row>
                {/* About Us Card */}
                <Col md={12} className="mb-4">
                  <Card className="h-100 border-0 shadow">
                    <Card.Body className="p-4">
                      <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>About Us</h2>
                      <p className="mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius 
                        enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros 
                        dolor interdum nulla, ut commodo diam libero vitae erat.
                      </p>
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius 
                        enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros 
                        dolor interdum nulla, ut commodo diam libero vitae erat.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                
                {/* Vision Card */}
                <Col md={6} className="mb-4">
                  <Card className="h-100 text-center border-0 shadow">
                    <Card.Body className="p-4">
                      <h3 className="mb-3" style={{ color: 'var(--school-blue)' }}>Vision</h3>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                
                {/* Mission Card */}
                <Col md={6} className="mb-4">
                  <Card className="h-100 text-center border-0 shadow">
                    <Card.Body className="p-4">
                      <h3 className="mb-3" style={{ color: 'var(--school-blue)' }}>Mission</h3>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Departments Section */}
      <section className="py-5" style={{backgroundColor: '#e9ecef'}}>
        <Container>
          <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>Our Departments</h2>
          <p className="text-center text-muted mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Row>
            {departments.map((dept, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <Card className="h-100 text-center border-0 shadow">
                  <Card.Body className="p-4">
                    <div className="mb-3" style={{ fontSize: '3rem' }}>{dept.icon}</div>
                    <h5 className="mb-3">{dept.title}</h5>
                    <p className="text-muted small">{dept.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button 
              variant="primary" 
              size="lg"
              style={{ backgroundColor: 'var(--school-blue)', border: 'none' }}
            >
              Learn More
            </Button>
          </div>
        </Container>
      </section>

      {/* News and Articles Section - Carousel */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>News and Articles</h2>
          <Row>
            <Col lg={10} className="mx-auto">
              <Carousel indicators={true} controls={true} interval={5000}>
                {newsArticles.map((article) => (
                  <Carousel.Item key={article.id}>
                    <Card className="border-0 shadow mx-auto" style={{ maxWidth: '100%' }}>
                      <Card.Img 
                        variant="top" 
                        src={article.image} 
                        style={{ height: '400px', objectFit: 'cover' }}
                      />
                      <Card.Body className="p-4">
                        <h3>{article.title}</h3>
                        <p className="text-muted">
                          {article.description}
                        </p>
                        <Button variant="link" className="p-0" style={{ color: 'var(--school-blue)' }}>
                          Learn More →
                        </Button>
                      </Card.Body>
                    </Card>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Leadership Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>Our Leadership</h2>
          <p className="text-center text-muted mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Row>
            {leadership.map((leader, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <Card className="text-center border-0 shadow h-100">
                  <Card.Body className="p-4">
                    <div 
                      className="rounded-circle mx-auto mb-3"
                      style={{
                        width: '120px',
                        height: '120px',
                        padding: '8px',
                        backgroundColor: '#e9ecef',
                        backgroundImage: `url(${leader.image})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: 'transparent',
                        backgroundPosition: 'center'
                      }}
                    />
                    <h5 className="mb-1">{leader.name}</h5>
                    <p className="text-primary mb-3">{leader.position}</p>
                    <p className="text-muted small">{leader.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <h3 className="text-center mb-5">Contact Us</h3>
        </Container>
      </section>

      {/* Explore Section */}
      <section className="py-5">
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              <div className="text-center">
                {/* Add explore content here if needed */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}