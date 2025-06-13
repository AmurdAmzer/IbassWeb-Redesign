'use client'

import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap'
import { useState } from 'react'
import emailjs from 'emailjs-com'

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    category: 'general',
    message: ''
  })
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertType, setAlertType] = useState('success')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // EmailJS configuration - REPLACE WITH ACTUAL IDs
      // EmailJS configuration from environment variables
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID
  
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        category: formData.category,
        message: formData.message,
        to_name: 'Ibadur Rahman Academy',
      }
  
      const response = await emailjs.send(serviceID, templateID, templateParams, userID)
      
      if (response.status === 200) {
        setAlertType('success')
        setAlertMessage('Message sent successfully! We will get back to you within 24-48 hours.')
        setShowAlert(true)
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          category: 'general',
          message: ''
        })
      }
    } catch (error) {
      setAlertType('danger')
      setAlertMessage('Failed to send message. Please try again or contact us directly.')
      setShowAlert(true)
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setShowAlert(false), 5000)
    }
  }

  const contactInfo = [
    {
      icon: '📍',
      title: 'Address',
      details: ['Ibadur Rahman Academy', 'Buobai, Asokore Mampong Municipality', 'Kumasi, Ashanti Region', 'Ghana - West Africa']
    },
    {
      icon: '📞',
      title: 'Phone Numbers',
      details: ['+233 32 xxxx xx', '+233 24 446 7968', '+233 24 401 2052']
    },
    {
      icon: '✉️',
      title: 'Email Addresses',
      details: ['ibadurrahmanacademyges@gmail.com', 'ibadurrahmanacademy.edu.gh']
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      details: ['+233 24 446 7968', 'Quick responses for urgent matters']
    }
  ]

  const officeHours = [
    { day: 'Monday - Friday', time: '8:00 AM - 5:00 PM' },
    { day: 'Weekends', time: 'Closed' }
  ]

  const socialLinks = [
    { platform: 'Facebook', icon: '📘', url: '#' },
    { platform: 'TikTok', icon: '🐦', url: '#'},
    { platform: 'YouTube', icon: '📺', url: '#'},
    { platform: 'LinkedIn', icon: '💼', url: '#'}
  ]

  return (
    <>
      {/* Contact Header */}
      <section className="py-5" style={{backgroundColor: '#e9ecef'}}>
        <Container>
          <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>
            Contact Us
          </h2>
          <p className="text-center text-muted mb-5 px-3">
            We&apos;re here to help! Reach out to us for admissions, general inquiries, or any questions about Ibadur Rahman Academy.
          </p>
        </Container>
      </section>

      {/* Main Contact Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            {/* Contact Information */}
            <Col lg={5} md={6} className="mb-5 mb-lg-0">
              <h3 className="mb-4" style={{ color: 'var(--school-blue)' }}>Contact Information</h3>
              
              {contactInfo.map((info, index) => (
                <Card key={index} className="mb-3 border-0 shadow-sm">
                  <Card.Body className="p-3">
                    <div className="d-flex align-items-start">
                      <span className="me-3" style={{ fontSize: '1.5rem' }}>{info.icon}</span>
                      <div>
                        <h6 className="mb-2" style={{ color: 'var(--school-blue)' }}>{info.title}</h6>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted small mb-1">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))}

              {/* Social Media Links */}
             {/* <div className="mt-4">
                <h6 className="mb-3" style={{ color: 'var(--school-blue)' }}>Follow Us</h6>
                <div className="d-flex gap-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="text-decoration-none"
                      style={{
                        display: 'inline-block',
                        padding: '8px 12px',
                        backgroundColor: social.color,
                        color: 'white',
                        borderRadius: '5px',
                        fontSize: '1.2rem'
                      }}
                      title={social.platform}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div> 
              </div> */}
            </Col>

            {/* Contact Form */}
            <Col lg={7} md={6}>
              <h3 className="mb-4" style={{ color: 'var(--school-blue)' }}>Get In Touch</h3>
              
              {showAlert && (
                <Alert variant={alertType} className="mb-4">
                  <strong>{alertType === 'success' ? 'Success!' : 'Error!'}</strong> {alertMessage}
                </Alert>
              )}

              <Card className="border-0 shadow">
                <Card.Body className="p-4">
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            name="firstName"
                            placeholder="Your first name"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            name="lastName"
                            placeholder="Your last name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="email"
                            name="email"
                            placeholder="Your email address"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="tel"
                            name="phone"
                            placeholder="Your phone number"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Select
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="general">General Inquiry</option>
                            <option value="admissions">Admissions</option>
                            <option value="academic">Academic Support</option>
                            <option value="financial">Fees</option>
                            <option value="technical">Technical Support</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            name="subject"
                            placeholder="Subject of this message"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-4">
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        placeholder="Tell us how we can help you..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-100"
                      disabled={isSubmitting}
                      style={{
                        backgroundColor: 'var(--school-blue)',
                        border: 'none',
                        borderRadius: '25px'
                      }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Office Hours & Map Section */}
      <section className="py-5" style={{backgroundColor: '#e9ecef'}}>
        <Container>
          <Row>
            {/* Office Hours */}
            <Col lg={4} md={6} className="mb-4 mb-lg-0">
              <Card className="h-100 border-0 shadow">
                <Card.Body className="p-4 text-center">
                  <div className="mb-3" style={{ fontSize: '3rem' }}>🕒</div>
                  <h5 className="mb-3" style={{ color: 'var(--school-blue)' }}>Office Hours</h5>
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="d-flex justify-content-between mb-2">
                      <span className="text-muted">{schedule.day}</span>
                      <span style={{ color: 'var(--school-blue)', fontWeight: '500' }}>
                        {schedule.time}
                      </span>
                    </div>
                  ))}
                  <hr className="my-3" />
                  <p className="text-muted small mb-0">
                    For urgent matters outside office hours, please use our WhatsApp contact.
                  </p>
                </Card.Body>
              </Card>
            </Col>

            {/* Location Map */}
            <Col lg={8} md={6}>
              <Card className="h-100 border-0 shadow">
                <Card.Body className="p-0">
                  <div style={{ height: '350px', borderRadius: '0.375rem', overflow: 'hidden' }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15849.67103172481!2d-1.558798682690602!3d6.718768380893207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb9509b166bca1%3A0x7fa6a31c71559e76!2sIbadur%20Rahman%20Academy%20SHS!5e0!3m2!1sen!2sus!4v1749491156930!5m2!1sen!2sus" width="100%"
                      height="350"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ibadur Rahman Academy Location"
                    />
                  </div>
                </Card.Body>
                <Card.Footer className="bg-white border-0 p-3">
                  <div className="text-center">
                    <h6 className="mb-1" style={{ color: 'var(--school-blue)' }}>Find Us</h6>
                    <p className="text-muted small mb-0">
                      Buobai, Asokore Mampong Municipality, Kumasi, Ashanti Region
                    </p>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-5" style={{backgroundColor: '#e9ecef'}}>
        <Container>
          <h3 className="text-center mb-5" style={{ color: 'var(--school-blue)' }}>
            Frequently Asked Questions
          </h3>
          <Row>
            <Col lg={10} className="mx-auto">
              <Row>
                <Col md={6} className="mb-4">
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <h6 className="mb-2" style={{ color: 'var(--school-blue)' }}>
                        What are the admission requirements?
                      </h6>
                      <p className="text-muted small mb-0">
                        Students need to pass the BECE and meet our entrance requirements. Contact our admissions office for detailed information.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className="mb-4">
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <h6 className="mb-2" style={{ color: 'var(--school-blue)' }}>
                        Do you offer boarding facilities?
                      </h6>
                      <p className="text-muted small mb-0">
                        Yes, we provide both boarding and day school options. Our dormitories are modern and well-equipped for student comfort.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className="mb-4">
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <h6 className="mb-2" style={{ color: 'var(--school-blue)' }}>
                        What programs do you offer?
                      </h6>
                      <p className="text-muted small mb-0">
                        We offer General Science, General Arts, Visual Arts, and Home Economics programs at the senior high school level.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className="mb-4">
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <h6 className="mb-2" style={{ color: 'var(--school-blue)' }}>
                        How can I schedule a school visit?
                      </h6>
                      <p className="text-muted small mb-0">
                        Contact our admissions office to schedule a tour. We welcome prospective students and parents to visit our campus.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}