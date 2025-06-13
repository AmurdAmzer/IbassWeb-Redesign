'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';

export default function DepartmentPage() {
    return (
        <>
          {/* Academic Section */}
        
        <section className="py-5" style={{backgroundColor: '#e9ecef'}}>
            <Container className="px-4 px-md-0">
            <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>Our Departments</h2>
            <p className="text-center text-muted mb-5 px-3">
            Explore our diverse academic programs designed to nurture every student&#39;s potential and prepare them for successful futures.
            </p>
            </Container>
        </section>
        {/* General Science Department */}
        <section className="py-5">
        <Container className="px-4 px-md-0">
            <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>General Science Department</h2>
            <p className="text-center text-muted mb-5 px-3">
            Preparing future doctors, engineers, and scientists through comprehensive study of Biology, Chemistry, Physics, and Mathematics.
            </p>
            <Row className="justify-content-center">
            <Col lg={4} md={6}>
                <Card className="h-100 text-center border-0 shadow">
                <Card.Body className="p-4">
                    <div className="mb-3" style={{ fontSize: '3rem' }}>🔬</div>
                    <h5 className="mb-3">General Science</h5>
                    <p className="text-muted small">Preparing future doctors, engineers, and scientists through comprehensive study of Biology, Chemistry, Physics, and Mathematics.</p>
                </Card.Body>
                </Card>
            </Col>
            </Row>
        </Container>
        </section>

        {/* General Arts Department */}
        <section className="py-5" style={{backgroundColor: '#e9ecef'}}>
        <Container className="px-4 px-md-0">
            <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>General Arts Department</h2>
            <p className="text-center text-muted mb-5 px-3">
            Developing critical thinkers and communicators through Literature, History, Geography, Economics, and Languages.
            </p>
            <Row className="justify-content-center">
            <Col lg={4} md={6}>
                <Card className="h-100 text-center border-0 shadow">
                <Card.Body className="p-4">
                    <div className="mb-3" style={{ fontSize: '3rem' }}>📚</div>
                    <h5 className="mb-3">General Arts</h5>
                    <p className="text-muted small">Developing critical thinkers and communicators through Literature, History, Geography, Economics, and Languages.</p>
                </Card.Body>
                </Card>
            </Col>
            </Row>
        </Container>
        </section>

        {/* Visual Arts Department */}
        <section className="py-5">
        <Container className="px-4 px-md-0">
            <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>Visual Arts Department</h2>
            <p className="text-center text-muted mb-5 px-3">
            Nurturing creative talent through Graphic Design, Textiles, Ceramics, Picture Making, and Art.
            </p>
            <Row className="justify-content-center">
            <Col lg={4} md={6}>
                <Card className="h-100 text-center border-0 shadow">
                <Card.Body className="p-4">
                    <div className="mb-3" style={{ fontSize: '3rem' }}>🎨</div>
                    <h5 className="mb-3">Visual Arts</h5>
                    <p className="text-muted small">Nurturing creative talent through Graphic Design, Textiles, Ceramics, Picture Making, and Art.</p>
                </Card.Body>
                </Card>
            </Col>
            </Row>
        </Container>
        </section>

        {/* Home Economics Department */}
        <section className="py-5" style={{backgroundColor: '#e9ecef'}}>
        <Container className="px-4 px-md-0">
            <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>Home Economics Department</h2>
            <p className="text-center text-muted mb-5 px-3">
            Developing essential life skills through practical learning in nutrition, textiles, and home management.
            </p>
            <Row className="justify-content-center">
            <Col lg={4} md={6}>
                <Card className="h-100 text-center border-0 shadow">
                <Card.Body className="p-4">
                    <div className="mb-3" style={{ fontSize: '3rem' }}>🏠</div>
                    <h5 className="mb-3">Home Economics</h5>
                    <p className="text-muted small">Developing essential life skills through practical learning in nutrition, textiles, and home management.</p>
                </Card.Body>
                </Card>
            </Col>
            </Row>
        </Container>
        </section>        
        </>
    )
}