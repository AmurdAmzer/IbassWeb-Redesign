'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';

export default function AboutUsPage() {
  return (
    <>
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

            <Col lg={6} md={12} className="order-1 order-lg-2">
              <Row>
                {/* About Us Card */}
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
                        About Us
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

      {/* School Rules and Anthem to be added later */}
    </>
  );
}
