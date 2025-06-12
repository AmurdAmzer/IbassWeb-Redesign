// components/SearchBar.js
'use client'

import { useState, useEffect } from 'react'
import { Form, Button, Dropdown, Card } from 'react-bootstrap'
import { useRouter } from 'next/navigation'

export default function SearchBar({ onSearchFocus, onNavigate }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const router = useRouter()

  // Putting searchbar in view on mobile/smaller devices

  const handleFocus = (e) => {
    // For mobile devices
    if (window.innerWidth <= 768) {
      setTimeout(() => {
        // Get the header/navbar element that contains the search
        const header = e.target.closest('header') || e.target.closest('nav') || e.target.closest('.navbar');
        
        if (header) {
          // Scroll the header to the top of the viewport
          header.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          // Fallback: scroll the search input itself
          e.target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        // Additional scroll to ensure visibility
        window.scrollBy(0, -50);
      }, 400); // Increased delay for keyboard animation
    }
  };

  // Sample searchable content - replace with actual content
  const searchableContent = [
    // Pages
    { title: 'About Us', type: 'page', url: '/about-us', description: 'Learn about our school history and mission' },
    { title: 'Contact Us', type: 'page', url: '/contact-us', description: 'Get in touch with our school' },
    { title: 'Gallery', type: 'page', url: '/gallery', description: 'View photos and videos of school events' },
    { title: 'Staff', type: 'page', url: '/staff', description: 'Meet our dedicated educators and staff' },
    
    // Departments
    { title: 'General Science', type: 'department', url: '/academic', description: 'Biology, Chemistry, Physics, and Mathematics programs' },
    { title: 'General Arts', type: 'department', url: '/academic', description: 'Literature, History, Geography, Economics' },
    { title: 'Visual Arts', type: 'department', url: '/academic', description: 'Graphic Design, Textiles, Ceramics, Art' },
    { title: 'Home Economics', type: 'department', url: '/academic', description: 'Nutrition, textiles, and home management' },
    
    // Staff
    { title: 'Mr. Bashiru Shehu', type: 'staff', url: '/staff', description: 'Headmaster - Educational leadership and innovation' },
    { title: 'Mr. Umar Ali', type: 'staff', url: '/staff', description: 'Assistant Headmaster - Curriculum development' },
    { title: 'Mrs. Mariam Issah', type: 'staff', url: '/staff', description: 'Assistant Headmistress - Student welfare' },
    
    // General terms
    { title: 'Admissions', type: 'info', url: '/contact-us', description: 'Information about school admission requirements' },
    { title: 'BECE Requirements', type: 'info', url: '/contact-us', description: 'Basic Education Certificate Examination requirements' },
    { title: 'Boarding Facilities', type: 'info', url: '/contact-us', description: 'Student accommodation and dormitory information' },
    { title: 'School Fees', type: 'info', url: '/contact-us', description: 'Information about tuition and fees' },
    { title: 'Location', type: 'info', url: '/contact-us', description: 'Buobai, Asokore Mampong Municipality, Kumasi' }
  ]

  // Search function
  const performSearch = (term) => {
    if (term.length < 2) {
      setSearchResults([])
      setShowResults(false)
      return
    }

    const results = searchableContent.filter(item =>
      item.title.toLowerCase().includes(term.toLowerCase()) ||
      item.description.toLowerCase().includes(term.toLowerCase())
    ).slice(0, 6) // Limit to 6 results

    setSearchResults(results)
    setShowResults(true)
  }

  // Handle search input change
  const handleSearchChange = (e) => {
    const term = e.target.value
    setSearchTerm(term)
    performSearch(term)
  }

  // Handle search icon click
  const handleSearchIconClick = () => {
    setIsExpanded(!isExpanded)
    if (!isExpanded) {
      // Focus the input when expanding
      setTimeout(() => {
        document.querySelector('.search-input')?.focus()
      }, 100)
    } else {
      // Clear search when collapsing
      setSearchTerm('')
      setSearchResults([])
      setShowResults(false)
      onSearchFocus?.(false);
    }
  }
  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchResults.length > 0) {
      router.push(searchResults[0].url)
      setShowResults(false)
      setSearchTerm('')
      setIsExpanded(false)
      onSearchFocus?.(false)
      onNavigate?.()
    }
  }

  // Handle result click
  const handleResultClick = (url) => {
    router.push(url)
    setShowResults(false)
    setSearchTerm('')
    setIsExpanded(false)
    onNavigate?.()
  }

  // Close results when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.search-container')) {
        setShowResults(false)
        setIsExpanded(false)
        setSearchTerm('')
        onSearchFocus?.(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [onSearchFocus])

  // Get type icon - REMOVED
  // const getTypeIcon = (type) => {
  //   switch (type) {
  //     case 'page': return '📄'
  //     case 'department': return '🎓'
  //     case 'staff': return '👤'
  //     case 'info': return 'ℹ️'
  //     default: return '📄'
  //   }
  // }

  return (
    <div className="position-relative search-container" onClick={(e) => e.stopPropagation()}>
      <div className="d-flex align-items-center">
        {/* Collapsible Search Form */}
        <Form 
          onSubmit={handleSearchSubmit} 
          className="d-flex"
          style={{
            transition: 'all 0.3s ease',
            width: isExpanded ? '250px' : '0px',
            overflow: 'hidden'
          }}
        >
          <Form.Control
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            onFocus={(e) => {
                onSearchFocus?.(true); // Notify parent
                handleFocus(e);
              }}
              onBlur={() => {
                setTimeout(() => {
                  onSearchFocus?.(false); // Notify parent
                }, 500);
              }}
              size="sm"
              className="search-input"
              style={{ 
                borderRadius: '20px',
                border: '2px solid var(--school-blue)',
                opacity: isExpanded ? 1 : 0,
                transition: 'opacity 0.3s ease',
                fontSize: '16px',
                boxShadow: 'none'
              }}
          />
        </Form>
        
        {/* Search Icon Button */}
        <Button 
          onClick={handleSearchIconClick}
          size="sm"
          variant="link"
          className="p-2"
          style={{
            color: 'var(--school-blue)',
            textDecoration: 'none',
            marginLeft: isExpanded ? '8px' : '0px',
            transition: 'margin-left 0.3s ease'
          }}
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
        </Button>
      </div>

      {/* Search Results Dropdown */}
      {showResults && searchResults.length > 0 && isExpanded && (
        <Card 
          className="position-absolute shadow-lg border-0"
          style={{
            top: '100%',
            left: 0,
            right: 0,
            zIndex: 1050,
            maxHeight: '400px',
            overflowY: 'auto',
            marginTop: '5px',
            width: '250px'
          }}
        >
          <Card.Body className="p-0">
            {searchResults.map((result, index) => (
              <div
                key={index}
                className="p-3 border-bottom search-result-item"
                style={{ 
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease'
                }}
                onClick={() => handleResultClick(result.url)}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                <div>
                  <h6 className="mb-1" style={{ color: 'var(--school-blue)' }}>
                    {result.title}
                  </h6>
                  <p className="text-muted small mb-0">
                    {result.description}
                  </p>
                  <span 
                    className="badge badge-sm mt-1"
                    style={{ 
                      backgroundColor: 'rgba(9, 10, 70, 0.1)',
                      color: 'var(--school-blue)',
                      fontSize: '0.7rem'
                    }}
                  >
                    {result.type}
                  </span>
                </div>
              </div>
            ))}
          </Card.Body>
        </Card>
      )}

      {/* No Results */}
      {showResults && searchResults.length === 0 && searchTerm.length >= 2 && isExpanded && (
        <Card 
          className="position-absolute shadow-lg border-0"
          style={{
            top: '100%',
            left: 0,
            right: 0,
            zIndex: 1050,
            marginTop: '5px',
            width: '250px'
          }}
        >
          <Card.Body className="text-center p-3">
          <p className="text-muted mb-0">No results found for &quot;{searchTerm}&quot;</p>
            <small className="text-muted">Try searching for staff, departments, or school information</small>
          </Card.Body>
        </Card>
      )}
    </div>
  )
}