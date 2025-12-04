// app/page.js
/* eslint-disable react/no-unescaped-entities */
'use client'

import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap'
import ResponsiveCardGrid from '../components/ResponsiveCardGrid';
import Hero from '../components/Hero'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const departments = [
    {
      icon: '🔬',
      title: 'General Science',
      description: 'Preparing future doctors, engineers, and scientists through comprehensive study of Biology, Chemistry, Physics, and Mathematics.'
    },
    {
      icon: '📚',
      title: 'General Arts',
      description: 'Developing critical thinkers and communicators through Literature, History, Geography, Economics, and Languages.'
    },
    {
      icon: '🎨',
      title: 'Visual Arts',
      description: 'Nurturing creative talent through Graphic Design, Textiles, Ceramics, Picture Making, and Art.'
    },
    {
      icon: '🏠',
      title: 'Home Economics',
      description: 'Developing essential life skills through practical learning in nutrition, textiles, and home management.'
    }
  ]

  const newsArticles = [
    {
      id: 1,
      title: 'Certificates for 2024 Candidates Available',
      description: 'The Ibadur Rahman Academy administration wishes to inform all 2024 graduates that their official certificates are ready for collection at the school premises. Come with a valid ID from Monday to Friday 9:00am - 3:00pm.',
      image: '/images/WASSCEResults2024.jpg'
    },
    {
      id: 2,
      title: 'SRC Week Celebration',
      description: 'Welcome to Ibadur Rahman School, where we nurture curiosity and foster a love for learning. Join us in our mission to create a supportive environment that inspires students to achieve their full potential.',
      image: '/images/news1.jpg'
    },
    {
      id: 3,
      title: 'Academic Excellence Awards 2025',
      description: 'Celebrating outstanding academic achievements of our students. Join us as we recognize the hard work and dedication of our brilliant minds.',
      image: '/images/news2.jpg'
    },
    {
      id: 4,
      title: 'Sports Day Success',
      description: 'Our annual sports day was a tremendous success with students showcasing their athletic abilities and team spirit.',
      image: '/images/news3.jpg'
    }
  ]

  const leadership = [
    {
      name: 'Mr. Bashiru Shehu',
      position: 'Headmaster',
      description: 'With over 15 years in educational leadership, Mr. Shehu brings vision and innovation to guide our school towards academic excellence and holistic student development.',
      image: '/images/headmaster.jpg'
    },
    {
      name: 'Mr. Umar Ali',
      position: 'Assistant Headmaster',
      description: 'A dedicated educator with expertise in curriculum development and student affairs, ensuring our academic programs meet the highest standards of quality education.',
      image: '/images/assistant1.jpg'
    },
    {
      name: 'Mrs. Mariam Issah',
      position: 'Assistant Headmistress',
      description: 'Passionate about student welfare and academic support, Mrs. Issah oversees pastoral care and creates a nurturing environment for all students to thrive.',
      image: '/images/assistant2.jpg'
    },
    {
      name: 'Ustaaz',
      position: 'Imaam',
      description: 'Our spiritual guide who provides Islamic education and moral guidance, helping students develop strong character and values alongside their academic pursuits.',
      image: '/images/ustaaz.jpg'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Us Section */}
      <section className="py-5">
        <Container className="px-3 px-md-0">
        <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>About Us</h2>
          <p className="text-center text-muted mb-5 px-3">
          Discover our rich history, mission, and commitment to providing quality education that transforms lives and builds future leaders.
          </p>
          <Row className="align-items-center">
            <Col lg={6} md={12} className="mb-4 mb-lg-0 order-2 order-lg-1">
              <Image 
                src="/images/about-us.jpg" 
                alt="About Ibadur Rahman Academy" 
                width={500}  
                height={1000}
                className="rounded about-image"
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  objectFit: 'cover',
                }}
              />
            </Col>
            <Col lg={6} md={12} className='order-1 order-lg-2'>
              <Row>
                {/* About Us Card */}
                <Col md={12} className="mb-4">
                  <Card className="h-100 text-center border-0 shadow">
                    <Card.Body className="p-3.5">
                      <h3 className="text-center mb-3" style={{ color: 'var(--school-blue)'}}>History</h3>
                      <p className="mb-2 text-muted">
                      Ibadur Rahman Academy is a public senior high school located in Buobai, Asokore Mampong Municipality, established by the Ibadur Rahman Association Inc., a non-governmental organization comprising Ghanaian Muslims residing and working in the United States. The idea to establish the school was conceived during one of their meetings in 2005, leading to fundraising efforts and land acquisition for the school project.
                      </p>
                      <p className="mb-2 text-muted">
                      The school&#39;s primary mission is to provide affordable, quality secondary education to poor and needy students in Kumasi, Ashanti Region, and throughout Ghana. The founders aim to raise educational standards among Muslims by establishing educational institutions in cities and deprived areas, while sponsoring both Muslim and non-Muslim children to pursue higher education.
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
                      A thriving academy of choice, excelling beyond Ghana to be one of the outstanding academic institutions in the areas of sciences, arts and sports
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
                        To motivate the development of a holistic sense of self by belonging to an academy which values excellence, creativity and responsible citizenry. 
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
      <section className="py-5" style={{backgroundColor: '#DEECFF'}} >
        <Container className="px-4 px-md-0">
          <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>Our Departments</h2>
          <p className="text-center text-muted mb-5 px-3">
          Explore our diverse academic programs designed to nurture every student's potential and prepare them for successful futures.
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
            <Link href="/academic" style={{ textDecoration: 'none' }}>
              <Button 
                variant="primary" 
                size="lg"
                style={{ backgroundColor: 'var(--school-blue)', border: 'none' }}
              >
                Learn More
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* News and Articles Section - Carousel */}
      <section className="py-5" style={{backgroundColor: '#090A46'}}>
        <Container >
          <h2 className="text-center mb-5 text-white" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '100% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>News & Gallery</h2>
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
                      <Card.Body className="p-4 text-center">
                        <h3>{article.title}</h3>
                        <p className="text-muted">
                          {article.description}
                        </p>
                        <Link href="/gallery?filter=news">
                          <Button variant="primary"
                                  className="px-4 py-2 fw-bold shadow-sm"
                                  style={{
                                    backgroundColor: 'var(--school-blue)',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    transition: 'all 0.3s ease-in-out',
                                  }}
                                  onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                                  onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                                >
                            Read More →
                          </Button>
                        </Link>
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
      <section className="py-5">
        <Container className="px-4 px-md-0">
          <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>Our Leadership</h2>
          <p className="text-center text-muted mb-5 px-3">
          Meet our dedicated team of experienced educators and administrators committed to academic excellence and student success.
          </p>
            <ResponsiveCardGrid 
              items={leadership}
              renderCard={(leader) => (
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
              )}
            />
        </Container>
      </section>
    </>
  )
}