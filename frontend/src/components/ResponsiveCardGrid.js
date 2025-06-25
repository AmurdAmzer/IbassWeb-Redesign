'use client';

import { Row, Col } from 'react-bootstrap';
import { useEffect, useState, useRef } from 'react';

export default function ResponsiveCardGrid({ items, renderCard }) {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  
  // Calculate how many cards are visible (3 on mobile)
  const cardsPerView = 3;
  const totalPages = Math.ceil(items.length / cardsPerView);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle scroll to update current index
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cards = container.querySelectorAll('.mobile-scroll-card');
      const containerCenter = container.scrollLeft + container.offsetWidth / 2;
      
      let closestIndex = 0;
      let closestDistance = Infinity;
      
      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(containerCenter - cardCenter);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });
      
      setCurrentIndex(closestIndex);
    }
  };

  // Scroll to specific page
  const scrollToPage = (pageIndex) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('.mobile-scroll-card')?.offsetWidth || 0;
      const gap = 10;
      const scrollPosition = pageIndex * cardsPerView * (cardWidth + gap);
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(pageIndex);
    }
  };

  // Mobile: Horizontal scroll with center focus
    if (isMobile) {
        return (
        <div className="mobile-carousel-container">
            <div 
            className="mobile-scroll-container"
            ref={scrollContainerRef}
            onScroll={handleScroll}
            >
            <div className="mobile-scroll-wrapper">
                {items.map((item, index) => (
                <div 
                    key={index} 
                    className={`mobile-scroll-card ${
                    index === currentIndex ? 'active' : ''
                    }`}
                >
                    {renderCard(item, index)}
                </div>
                ))}
            </div>
            </div>
    
            {/* Dots Indicator */}
            <div className="carousel-dots">
            {items.map((_, i) => (
                <button
                key={i}
                className={`carousel-dot ${i === currentIndex ? 'active' : ''}`}
                onClick={() => {
                    scrollContainerRef.current?.children[0].children[i].scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                    });
                    setCurrentIndex(i);
                }}
                aria-label={`Go to slide ${i + 1}`}
                />
            ))}
            </div>
        </div>
        );
    }

  // Desktop: Grid layout
  return (
    <Row>
      {items.map((item, index) => (
        <Col lg={3} md={6} className="mb-4" key={index}>
          <div className="staff-card">
            {renderCard(item, index)}
          </div>
        </Col>
      ))}
    </Row>
  );
}