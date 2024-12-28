import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';


function AdminNavbar() {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/">MyWebsite</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Main Menu</Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default AdminNavbar
