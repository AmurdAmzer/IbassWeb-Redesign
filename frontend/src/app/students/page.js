'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';

export default function StudentsPage() {
    const prefects = [
        {
          name: 'Ashraf Muftawu',
          position: 'Boys Prefect',
          description: '2022/2023',
          image: '/images/headmaster.jpg'
        },
        {
          name: 'Abubakar Siddick Mohammed',
          position: 'Assist Boys Prefect' ,
          description: '2022/2023',
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
    ];

    return (
        <>
          {/* Students Section */}
          <section className="py-5">
            <Container className="px-4 px-md-0">
              <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>Student Leadership</h2>
              <p className="text-center text-muted mb-5 px-3">
                Meet our dedicated team of professionals committed to providing quality education and comprehensive support for student success.
              </p>
            </Container>
          </section>

          {/* Prefects Section */}
          <section className="py-5" style={{backgroundColor: '#e9ecef'}}>
            <Container className="px-4 px-md-0">
              <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>Student Leaders</h2>
              <p className="text-center text-muted mb-5 px-3">
                Our experienced leadership team guiding the school towards academic excellence and holistic development.
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