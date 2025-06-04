'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';

export default function AboutUsPage() {
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
      {/* About Us Section */}
      <section className="py-5 ">    
        <Container className="text-center">
        <Row>
            <Col>
                <div className="text-center mb-3" >
                <div style={{
                    fontSize: '1.9rem',
                    color: '#555',
                    color: 'var(--school-blue)',
                    marginBottom: '0.1rem'
                }}>
                    About
                </div>
                <div style={{
                    fontSize: '2.5rem',
                    fontWeight: '500',
                    color: 'var(--school-blue)',
                    background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom',
                    backgroundSize: '80% 3px',
                    paddingBottom: '10px',
                    display: 'inline-block'
                }}>
                    Ibadur Rahman Academy
                </div>
                </div>
            </Col>
        </Row>

        </Container>
      </section>

      <section className="py-5" style={{backgroundColor: '#e9ecef'}}>
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

            <Col lg={6} md={12} className="order-1 order-lg-2">
              <Row>
                {/* History Card */}
                <Col md={12} className="mb-4">
                  <Card className="h-100 text-center border-0 shadow">
                    <Card.Body className="p-4">
                      <h2 className="text-center mb-3" style={{
                        background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom',
                        backgroundSize: '80% 3px',
                        paddingBottom: '15px',
                        width: 'fit-content',
                        margin: '0 auto 1rem auto'
                      }}>
                        History
                      </h2>
                      <p className="mb-3 text-muted">
                        Ibadur Rahman Academy is a private senior high school located at Buobai in the Asokore Mampong Municipality. The school was established by the Ibadur Rahman Association Inc., a Non-Governmental organisation made up of most / predominant Ghanaian Muslim residing and working in the United State of America (USA).
                      </p>
                      <p className="mb-0 text-muted">
                        Their main aim for establishing the school is to provide secondary education to the poor and needy students in Kumasi, Ashanti Region in particular and Ghana as a whole.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>

              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {        /* Mission and Vision Section */ }
        <section className="py-5">
            <Container>
            <Row className="text-center">
                <Col>
                <h2 className="mb-4" style={{
                    background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom',
                    backgroundSize: '80% 3px',
                    paddingBottom: '15px',
                    width: 'fit-content',
                    margin: '0 auto'
                }}>
                    Mission and Vision
                </h2>
                </Col>
            </Row>
            <Row className="text-center">
                <Col md={6} className="mb-4">
                <Card className="h-100 border-0 shadow">
                    <Card.Body>
                    <h3 className="mb-3">Mission</h3>
                    <p className="text-muted">
                        To provide quality education that empowers students to achieve their full potential and become responsible citizens.
                    </p>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={6}>
                <Card className="h-100 border-0 shadow">
                    <Card.Body>
                    <h3 className="mb-3">Vision</h3>
                    <p className="text-muted">
                        To be a leading educational institution recognized for excellence in academics, character development, and community service.
                    </p>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            </Container>
        </section>

        {/* Founders Section */}
        <section className="py-5" style={{backgroundColor: '#e9ecef'}}>
        <Container>
          <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>Our Founders</h2>
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
        </Container>
      </section>

      {/* School Rules and Anthem to be added later */}
    </>
  );
}
