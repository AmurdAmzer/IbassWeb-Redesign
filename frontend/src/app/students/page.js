'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';

export default function StudentsPage() {
    const prefects = [
        {
          name: 'Ashraf Muftawu',
          position: 'Boys Prefect',
          description: '2022/2023',
          image: '/images/ashraf.jpg'
        },
        {
          name: 'Abubakar Siddick Mohammed',
          position: 'Assist Boys Prefect' ,
          description: '2022/2023',
          image: '/images/sidik.jpg'
        },
        {
          name: 'Suwaiba Osman',
          position: 'Main Girls Prefect',
          description: '2022/2023',
          image: '/images/suwaiba.jpg'
        },
        {
          name: 'Hawa Kabiru',
          position: 'Assist Girls Prefect',
          description: '2022/2023',
          image: '/images/hawa.jpeg'
        }
    ];

    return (
        <>
          {/* Students Section */}
          <section className="py-5" style={{backgroundColor: '#e9ecef'}}>
            <Container className="px-4 px-md-0">
              <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>Student Leadership</h2>
              <p className="text-center text-muted mb-5 px-3">
                Meet our dedicated team of professionals committed to providing quality education and comprehensive support for student success.
              </p>
            </Container>
          </section>
          
          {/* SRC Section */}
          <section className="py-5">
            <Container className="px-3 px-md-0">
              <Row className="align-items-stretch">
                <Col lg={6} md={12} className="mb-4 mb-lg-0 order-2 order-lg-1">
                    <img 
                        src="/images/src.png" 
                        alt="About Ibadur Rahman Academy" 
                        className="rounded src-image"
                        style={{ 
                        width: '100%', 
                        height: 'auto',
                        objectFit: 'cover',
                        }}
                    />
                </Col>

                <Col lg={6} md={12} className="order-1 order-lg-2">
                  <Row>
                    {/* SRC Card */}
                    <Col md={12} className="mb-4">
                      <Card className="h-100 text-center border-0">
                        <Card.Body className="p-4">
                          <h2 className="text-center mb-3" style={{ color: 'var(--school-blue)'}}>
                          Students&#39; Representative Council (SRC)
                          </h2>
                          <p className="mb-2 text-muted">
                          About Ibadur Rahman Academy SRC
                          </p>
                          <p className="mb-2 text-muted">
                          The SRC was formed in the year 2021 when the first sets of students were admitted into the school. The SRC is the highest student leadership group.
                          </p>
                          <p className="mb-2 text-muted">
                          The SRC main aim is to champion the cause of students and laise between the student body, the school administration and those outside the school community.
                          </p>
                          <p className="mb-2 text-muted">
                          It is remarkable to say that through the instrumentality of this council, this school stands among the few institutions in the country which have never gone on a violent demonstration, a clear testimony of the prevailing understanding between students and authorities.
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>

                  </Row>
                </Col>
              </Row>
            </Container>
          </section>

          {/* Prefects Section */}
          <section className="py-5" style={{backgroundColor: '#e9ecef'}}>
            <Container className="px-4 px-md-0">
              <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>Student Leaders</h2>
              <p className="text-center text-muted mb-5 px-3">
              Below is the list of School Prefects for 2022/2023 academic year.
              </p>
              <Row>
                {prefects.map((member, index) => (
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
                            backgroundImage: `url(${member.image})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: 'transparent',
                            backgroundPosition: 'center'
                          }}
                        />
                        <h5 className="mb-1">{member.name}</h5>
                        <p className="text-primary mb-3">{member.position}</p>
                        <p className="text-muted small">{member.description}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </section>
        </>
    )
}