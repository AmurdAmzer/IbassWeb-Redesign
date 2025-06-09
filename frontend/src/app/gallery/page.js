'use client'

import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap'
import { useState } from 'react'
import Image from 'next/image'

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [showModal, setShowModal] = useState(false)
  const [selectedMedia, setSelectedMedia] = useState(null)

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      category: 'academic',
      title: 'Science Laboratory Session',
      description: 'Students conducting chemistry experiments in our modern laboratory',
      thumbnail: '/images/scienceLab.jpeg',
      fullSize: '/images/scienceLab.jpeg'
    },
    {
      id: 2,
      type: 'image',
      category: 'sports',
      title: 'Inter-House Football Match',
      description: 'Annual sports competition between school houses',
      thumbnail: '/images/news3.jpg',
      fullSize: '/images/news3.jpg'
    },
    {
        id: 3,
        type: 'image',
        category: 'campus',
        title: 'SRC Week Celebration',
        description: 'Annual week of activities organized by the Student Representative Council',
        thumbnail: '/images/src.png',
        fullSize: '/images/nsrc.png'
      },
    {
      id: 4,
      type: 'video',
      category: 'events',
      title: 'Graduation Ceremony 2024',
      description: 'Highlights from our graduation ceremony',
      thumbnail: '/images/gallery/graduation-thumb.jpg',
      videoUrl: '/videos/graduation-2024.mp4'
    },
    {
      id: 5,
      type: 'video',
      category: 'sports',
      title: 'Athletics Day Highlights',
      description: 'Best moments from our annual athletics competition',
      thumbnail: '/images/gallery/athletics-thumb.jpg',
      videoUrl: '/videos/athletics-2024.mp4'
    },
    {
        id: 6,
        type: 'video',
        category: 'sports',
        title: 'Athletics Day Highlights',
        description: 'Best moments from our annual athletics competition',
        thumbnail: '/images/gallery/athletics-thumb.jpg',
        videoUrl: '/videos/athletics-2024.mp4'
      }
  ]

  const filterCategories = [
    { key: 'all', label: 'All'},
    { key: 'academic', label: 'Academic Events'},
    { key: 'sports', label: 'Sports & Athletics'},
    { key: 'campus', label: 'Campus Life'},
    { key: 'events', label: 'Special Events'}
  ]

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  const handleMediaClick = (item) => {
    setSelectedMedia(item)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedMedia(null)
  }

  return (
    <>
      {/* Gallery Header */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-3" style={{background: 'linear-gradient(to right, transparent, var(--school-blue), transparent) no-repeat bottom', backgroundSize: '80% 3px', paddingBottom: '15px', width: 'fit-content', margin: '0 auto 1rem auto'}}>
            School Gallery
          </h2>
          <p className="text-center text-muted mb-5 px-3">
            Explore moments that capture the spirit of academic excellence, vibrant campus life, and memorable events at Ibadur Rahman Academy.
          </p>
        </Container>
      </section>

      {/* Filter Section */}
      <section className="py-4" style={{backgroundColor: '#e9ecef'}}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {filterCategories.map((category) => (
                  <Button
                    key={category.key}
                    variant={activeFilter === category.key ? 'primary' : 'outline-primary'}
                    className="mb-2 d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: activeFilter === category.key ? 'var(--school-blue)' : 'transparent',
                      borderColor: 'var(--school-blue)',
                      color: activeFilter === category.key ? 'white' : 'var(--school-blue)',
                      textAlign: 'center',
                    }}
                    onClick={() => setActiveFilter(category.key)}
                  >
                    <span className="me-2">{category.icon}</span>
                    {category.label}
                  </Button>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery Grid */}
      <section className="py-5">
        <Container>
          <Row>
            {filteredItems.map((item) => (
              <Col lg={4} md={6} className="mb-4" key={item.id}>
                <Card 
                  className="h-100 border-0 shadow gallery-card"
                  style={{ cursor: 'pointer', transition: 'transform 0.3s ease' }}
                  onClick={() => handleMediaClick(item)}
                  onMouseEnter={(e) => e.target.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  <div className="position-relative">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      width={400}
                      height={250}
                      className="card-img-top"
                      style={{ 
                        objectFit: 'cover',
                        height: '250px',
                        width: '100%'
                      }}
                    />
                    {item.type === 'video' && (
                      <div 
                        className="position-absolute top-50 start-50 translate-middle"
                        style={{
                          backgroundColor: 'rgba(0,0,0,0.7)',
                          borderRadius: '50%',
                          padding: '15px',
                          color: 'white',
                          fontSize: '1.5rem'
                        }}
                      >
                        ▶️
                      </div>
                    )}
                    <div 
                      className="position-absolute top-0 end-0 m-2 px-2 py-1 rounded"
                      style={{
                        backgroundColor: 'var(--school-blue)',
                        color: 'white',
                        fontSize: '0.8rem'
                      }}
                    >
                      {item.type === 'video' ? '📹 Video' : '📷 Photo'}
                    </div>
                  </div>
                  <Card.Body className="p-3">
                    <h6 className="mb-2" style={{ color: 'var(--school-blue)' }}>
                      {item.title}
                    </h6>
                    <p className="text-muted small mb-0">{item.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {filteredItems.length === 0 && (
            <Row>
              <Col className="text-center py-5">
                <p className="text-muted">No items found for the selected category.</p>
              </Col>
            </Row>
          )}
        </Container>
      </section>

      {/* Modal for Full Size View */}
      <Modal 
        show={showModal} 
        onHide={handleCloseModal} 
        size="lg" 
        centered
        className="gallery-modal"
      >
        <Modal.Header closeButton style={{ borderBottom: 'none' }}>
          <Modal.Title style={{ color: 'var(--school-blue)' }}>
            {selectedMedia?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center p-0">
          {selectedMedia?.type === 'image' ? (
            <Image
              src={selectedMedia.fullSize}
              alt={selectedMedia.title}
              width={800}
              height={600}
              style={{ 
                objectFit: 'contain',
                maxHeight: '70vh',
                width: '100%'
              }}
            />
          ) : (
            <video 
              controls 
              className="w-100"
              style={{ maxHeight: '70vh' }}
            >
              <source src={selectedMedia?.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <div className="p-3">
            <p className="text-muted mb-0">{selectedMedia?.description}</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}