'use client';

import { Container, Row, Col, Card } from 'react-bootstrap';

export default function StaffPage() {
    const managementTeam = [
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
    ];

    const teachingStaff = [
        {
          name: 'Mr. Saeed Sualeh',
          position: 'Mathematics Teacher',
          description: 'Specialized in advanced mathematics with 8 years of teaching experience, helping students excel in mathematical concepts and problem-solving.',
          image: '/images/rahma.jpg'
        },
        {
          name: 'Mr. Kamilu',
          position: 'Science Teacher',
          description: 'Expert in Biology and Chemistry with a passion for laboratory experiments and scientific research, inspiring the next generation of scientists.',
          image: '/images/avatar.png'
        },
        {
          name: 'Mr. Muftawu Hussein',
          position: 'ICT Teacher',
          description: 'Literature enthusiast with excellent communication skills, fostering reading culture and effective writing among students.',
          image: '/images/mufty.jpg'
        },
        {
          name: 'Mr. Abdallah Abdul Rahim',
          position: 'History Teacher',
          description: 'Passionate historian who brings past events to life, helping students understand their heritage and develop critical thinking skills.',
          image: '/images/abdullah.jpg'
        }
    ];

    const nonTeachingStaff = [
        {
          name: 'Mrs. Bilkiss Ahmed',
          position: 'Librarian',
          description: 'Dedicated library manager who ensures students have access to quality educational resources and maintains an conducive learning environment.',
          image: '/images/avatar.png'
        },
        {
          name: 'Mr. Joseph Mensah',
          position: 'School Accountant',
          description: 'Professional accountant managing school finances with transparency and ensuring proper allocation of educational resources.',
          image: '/images/avatar.png'
        },
        {
          name: 'Mrs. Grace Boateng',
          position: 'School Nurse',
          description: 'Qualified healthcare professional providing medical care and health education to ensure the wellbeing of all students and staff.',
          image: '/images/avatar.png'
        },
        {
          name: 'Mr. Emmanuel Tetteh',
          position: 'Security Officer',
          description: 'Experienced security personnel ensuring the safety and security of the school premises, students, and staff throughout the day.',
          image: '/images/avatar.png'
        }
    ];

    return (
        <>
          {/* Staff Overview Section */}
          <section className="py-5" style={{backgroundColor: '#e9ecef'}}>
            <Container className="px-4 px-md-0">
              <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>Our Staff</h2>
              <p className="text-center text-muted mb-5 px-3">
                Meet our dedicated team of professionals committed to providing quality education and comprehensive support for student success.
              </p>
            </Container>
          </section>

          {/* Management Team Section */}
          <section className="py-5">
            <Container className="px-4 px-md-0">
              <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>Management Team</h2>
              <p className="text-center text-muted mb-5 px-3">
                Our experienced leadership team guiding the school towards academic excellence and holistic development.
              </p>
              <Row>
                {managementTeam.map((member, index) => (
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

          {/* Teaching Staff Section */}
          <section className="py-5">
            <Container className="px-4 px-md-0">
              <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>Teaching Staff</h2>
              <p className="text-center text-muted mb-5 px-3">
                Qualified and passionate educators dedicated to inspiring and nurturing student learning across all subjects.
              </p>
              <Row>
                {teachingStaff.map((teacher, index) => (
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
                            backgroundImage: `url(${teacher.image})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: 'transparent',
                            backgroundPosition: 'center'
                          }}
                        />
                        <h5 className="mb-1">{teacher.name}</h5>
                        <p className="text-primary mb-3">{teacher.position}</p>
                        <p className="text-muted small">{teacher.description}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          </section>

          {/* Non-Teaching Staff Section */}
          <section className="py-5" style={{backgroundColor: '#e9ecef'}}>
            <Container className="px-4 px-md-0">
              <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>Non-Teaching Staff</h2>
              <p className="text-center text-muted mb-5 px-3">
                Essential support staff ensuring smooth school operations and comprehensive student services.
              </p>
              <Row>
                {nonTeachingStaff.map((staff, index) => (
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
                            backgroundImage: `url(${staff.image})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: 'transparent',
                            backgroundPosition: 'center'
                          }}
                        />
                        <h5 className="mb-1">{staff.name}</h5>
                        <p className="text-primary mb-3">{staff.position}</p>
                        <p className="text-muted small">{staff.description}</p>
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