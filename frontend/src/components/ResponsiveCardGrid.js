'use client';

import { Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';

export default function ResponsiveCardGrid({ items, renderCard }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile: Horizontal scroll
  if (isMobile) {
    return (
      <div className="mobile-scroll-container">
        <div className="mobile-scroll-wrapper">
          {items.map((item, index) => (
            <div key={index} className="mobile-scroll-card">
              {renderCard(item, index)}
            </div>
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