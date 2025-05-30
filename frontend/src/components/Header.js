// components/Header.js
'use client'

import { Container, Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  
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
    <Navbar bg="white" expand="lg" className="py-3 shadow-sm" sticky="top">
      <Container>
        <Navbar.Brand as={Link} href="/" style={{ color: '#090A46', fontWeight: 'bold' }}>
          IBADUR RAHMAN ACADEMY
        </Navbar.Brand>
        
        <Navbar.Toggle />
        
        <Navbar.Collapse>
          <Nav className="ms-auto">
            {navItems.map((item) => (
              <Nav.Link
                key={item.label}
                as={Link}
                href={item.href}
                className="px-3"
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