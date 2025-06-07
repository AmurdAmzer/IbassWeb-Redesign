// components/Header.js
'use client'

import { Container, Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useState } from 'react'
import logo from '/public/images/logo.png' // static import

export default function Header() {
  const pathname = usePathname()
  const [expanded, setExpanded] = useState(false)
  
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Academic', href: '/academic' },
    { label: 'Staff', href: '/staff' },
    { label: 'Students', href: '/students' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact Us', href: '/contact-us' },
    { label: 'Log in', href: '/log-in' }
  ]

  return (
    <Navbar 
    bg="white" 
    expand="lg" 
    className="py-3 shadow-sm" 
    sticky="top"
    expanded={expanded}
    onToggle={setExpanded}>
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
        
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        
        <Navbar.Collapse id='basic-navbar-nav'>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}