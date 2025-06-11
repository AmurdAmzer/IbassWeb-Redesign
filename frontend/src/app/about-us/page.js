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
      <section className="py-5" style={{backgroundColor: '#e9ecef'}}>
            <Container className="px-4 px-md-0">
              <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>About Us</h2>
              <p className="text-center text-muted mb-5 px-3">
              Discover our rich history, mission, and commitment to providing quality education that transforms lives and builds future leaders.
              </p>
            </Container>
      </section>

      <section className="py-5" >
        <Container className="px-3 px-md-0">
          <Row className="align-items-stretch">
            <Col lg={6} md={12} className="mb-4 mb-lg-0 order-2 order-lg-1">
                <img 
                    src="/images/about-us.jpg" 
                    alt="About Ibadur Rahman Academy" 
                    className="img-fluid rounded about-image"
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
                      <h2 className="text-center mb-3" style={{ color: 'var(--school-blue)'}}>
                        History
                      </h2>
                      <p className="mb-2 text-muted">
                      Ibadur Rahman Academy is a public senior high school located in Buobai, Asokore Mampong Municipality, established by the Ibadur Rahman Association Inc., a non-governmental organization comprising Ghanaian Muslims residing and working in the United States. The idea to establish the school was conceived during one of their meetings in 2005, leading to fundraising efforts and land acquisition for the school project.
                      </p>
                      <p className="mb-2 text-muted">
                      The school&#39;s primary mission is to provide affordable, quality secondary education to poor and needy students in Kumasi, Ashanti Region, and throughout Ghana. The founders aim to raise educational standards among Muslims by establishing educational institutions in cities and deprived areas, while sponsoring both Muslim and non-Muslim children to pursue higher education.
                      </p>
                      <p className="mb-2 text-muted">
                      The academy addresses the need for affordable education, giving Muslim parents who cannot afford high public school fees access to quality secondary education at lower costs. Additionally, it enables Muslim students to obtain knowledge about their religion alongside formal secular education.
                      </p>
                      <p className="mb-2 text-muted">
                      Registered with Ghana Education Service in 2012 (Registration: AR/KM-K/S.H.S/P1068), the school officially began operations in the 2013/2014 academic year. It has been led by Mr. Alhaji A.A. Darmanu, Madam Nima Abdul Rahman (resigned 2019), and Abdul Jamal Adam (until January 2022). The school holds West African School Certificate Examination Centre Number 0051610.
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
            <Container className="px-3 px-md-0">
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
                    <Col md={6} className="mb-4 d-flex">
                    <Card className="w-100 h-100 border-0 shadow">
                        <Card.Body className="d-flex flex-column justify-content-between">
                            <div>
                            <h3 className="mb-3">Mission</h3>
                            <p className="text-muted">
                                To provide quality education that empowers students to achieve their full potential and become responsible citizens.
                            </p>
                            </div>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={6} className="mb-4 d-flex">
                    <Card className="w-100 h-100 border-0 shadow">
                        <Card.Body className="d-flex flex-column justify-content-between">
                            <div>
                            <h3 className="mb-3">Vision</h3>
                            <p className="text-muted">
                                To be a leading educational institution recognized for excellence in academics, character development, and community service.
                            </p>
                            </div>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </section>

        {/* Founders Section */}
        <section className="py-5" style={{backgroundColor: '#e9ecef'}}>
        <Container className="px-4 px-md-0">
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
        </Container>
      </section>

      {/* School Anthem */}

      <section className="py-5">
        <Container className="px-3 px-md-0">
            <Row className="text-center mb-4">
                <h2 className="text-center mb-3" style={{
                        background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom',
                        backgroundSize: '80% 3px',
                        paddingBottom: '15px',
                        width: 'fit-content',
                        margin: '0 auto 1rem auto'
                      }}>
                        School Anthem
                </h2>
            </Row>
          <Row className="align-items-stretch">
            {/* School Anthem Text*/}
                <Col lg={6} md={12} className="order-1 order-lg-1 mb-4 text-center">
                <h2 className="text-center mb-3" style={{ color: 'var(--school-blue)'}}>
                        Anthem
                </h2>
                      <p className="mb-2 text-muted">
                        Hail Ibadur Rahman <br />
                        Alma Mater of us all <br />
                        Ibadur Rahman is our school <br />
                        We shall be the nation&#39;s pride <br />
                        We shall work from dusk to dawn <br />
                        Allah give us strength to uphold justice with all our strength and might <br /><br />

                        Chorus 2x <br />
                        Forward we go <br />
                        Yaa Allah, We the slaves of Allah <br /><br />

                        Hail Ibadur Rahman <br />
                        We shall be our parents&#39; pride <br />
                        We shall overcome the obstacles to be the nation&#39;s pride <br />
                        True NOBLES we&#39;ll be Allah&#39;s will so shall be <br />
                        Service to humanity is service to Almighty <br /><br />

                        Chorus 2x <br />
                        Forward we go <br />
                        Yaa Allah, We the slaves of Allah <br />
                      </p>
                </Col>

                <Col lg={6} md={12} className="mb-4 mb-lg-0 order-2 order-lg-2">
                <img 
                    src="/images/anthem.jpg" 
                    alt="About Ibadur Rahman Academy" 
                    className="img-fluid rounded about-image"
                    style={{ 
                    width: '100%', 
                    height: 'auto',
                    objectFit: 'cover',
                    }}
                />
                </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
