// components/Footer.js
import { Container, Row, Col } from 'react-bootstrap'

export default function Footer() {
  const footerLinks = [
    'Admissions Info',
    'Campus Life', 
    'Academic Programs',
    'Events Calendar',
    'Alumni Network',
    'Contact Us',
    'Support Center',
    'News Updates',
    'Scholarship Info',
    'Career Services'
  ]

  return (
    <footer style={{ backgroundColor: '#030419', color: 'white', padding: '60px 0 30px' }}>
      <Container>
        <Row>
          <Col lg={3} md={6} className="mb-4">
            <h5 className="mb-3 text-white">Address:</h5>
            <p>Buobai Kumasi Ghana</p>
            
            <h5 className="mb-3 mt-4 text-white">Contact:</h5>
            <p>
              01223456789<br />
              ibadurrahmanshs@gmail.com
            </p>
          </Col>

          <Col lg={1}></Col> {/* Empty spacer column */}
          
          <Col lg={8} md={6}>
            <Row>
              {footerLinks.map((link, index) => (
                <Col sm={6} key={index} className="mb-2">
                  <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
                    {link}
                  </a>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        
        <hr style={{ borderColor: 'rgba(255,255,255,0.2)', margin: '40px 0 20px' }} />
        
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              © 2025 Ibadur Rahman Academy. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}