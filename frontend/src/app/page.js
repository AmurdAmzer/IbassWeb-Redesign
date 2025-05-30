// app/page.js
'use client'

import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap'
import Hero from '../components/Hero'

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
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12} className="mb-4 mb-lg-0 order-2 order-lg-1">
              <img 
                src="/images/about-us.jpg" 
                alt="About Ibadur Rahman Academy" 
                className="img-fluid rounded shadow about-image"
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
                    <Card.Body className="p-4">
                      <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>About Us</h2>
                      <p className="mb-3 text-muted">
                      Ibadur Rahman Academy is a private senior high school located at Buobai in the Asokore Mampong Municipality. The school was established by the Ibadur Rahman Association Inc., a Non-Governmental organisation made up of most / predominant Ghanaian Muslim residing and working in the United State of America (USA). 
                      </p>
                      <p className="mb-0 text-muted">
                      Their main aim for establishing the school is to provide secondary education to the poor and needy students in Kumasi, Ashanti Region in particular and Ghana as a whole. 
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
      <section className="py-5" style={{backgroundColor: '#e9ecef'}}>
        <Container>
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
          <p className="text-center text-muted mb-5 px-3">
          Meet our dedicated team of experienced educators and administrators committed to academic excellence and student success.
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