import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
function ReactNavBar() {
  return (
       <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">MyApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
             <NavLink to="/" style={({ isActive }) => ({
                color: 'white',
                textDecoration: isActive ? 'underline' : 'none',
              })}
              
             >Home </NavLink>
            <NavLink to="/events"style={({ isActive }) => ({
                color: 'white',
                textDecoration: isActive ? 'underline' : 'none',
              })}> Events</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default ReactNavBar
