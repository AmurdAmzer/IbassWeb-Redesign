// components/Header.js
'use client'

import { Container, Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useState, useRef } from 'react'
import SearchBar from './SearchBar'
import logo from '/public/images/logo.png' // static import

export default function Header() {
  const pathname = usePathname()
  const [expanded, setExpanded] = useState(false)
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navbarRef = useRef(null);
  
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about-us' },
    { label: 'Academic', href: '/academic' },
    { label: 'Staff', href: '/staff' },
    { label: 'Students', href: '/students' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact-us' },
  ]

  return (
    <Navbar 
    ref={navbarRef}
    bg="white" 
    expand="lg" 
    className="py-3 shadow-sm" 
    sticky="top"
    expanded={expanded}
    onToggle={setExpanded}
    >
      <Container>
        <Navbar.Brand as={Link} href="/" className="d-flex align-items-center gap-2">
          <Image
            src={logo}
            alt='IBADUR RAHMAN ACADEMY Logo'
            width={40}
            height={40}
            style={{ objectFit: 'contain', borderRadius: '50%' }}
            />
            <span style={{ color: '#090A46', fontWeight: 'bold' }}>
          IBADUR RAHMAN ACADEMY </span>
        </Navbar.Brand>
        
        {/* Mobile menu toggle - hidden when search is focused */}
        {!isSearchFocused && (
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
        )}
        
        <Navbar.Collapse id='basic-navbar-nav'>
          {/* Nav items - hidden when search is focused on mobile */}
          {!isSearchFocused && (
            <Nav className="ms-auto">
              {navItems.map((item) => (
                <Nav.Link
                  key={item.label}
                  as={Link}
                  href={item.href}
                  className="nav-link-responsive"
                  onClick={() => setExpanded(false)}
                  style={{
                    color: '#090A46',
                    fontWeight: '500',
                    textDecoration: pathname === item.href ? 'underline' : 'none',
                    textUnderlineOffset: '5px'
                  }}
                >
                  {item.label}
                </Nav.Link>
              ))}
            </Nav>
          )}

          {/* Search Bar - Always visible */}
          <div className={isSearchFocused ? "ms-auto w-100" : "ms-3"}>
            <SearchBar 
            onSearchFocus={setIsSearchFocused}
            onNavigate={() => setExpanded(false)} 
            />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}