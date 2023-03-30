import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

function Navegacion() {
  return (
      <Navbar bg="light" expand="lg">
          <Container>
              <Navbar.Brand href="#home">
                  <img className="logo" src={require('../NavBar/logo.jpg')} alt="logo" width="100" height="60" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                      <Nav.Link href="#home">Catálogo</Nav.Link>
                      <Nav.Link href="#link">Quienes somos</Nav.Link>
                      <Nav.Link href="#link">Contacto</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
            <CartWidget />
          </Container>
      </Navbar>
  )
}

export default Navegacion



