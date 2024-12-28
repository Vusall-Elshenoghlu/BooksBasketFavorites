import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { FavoritesContext } from '../../../context/favoritesContext';
import { BasketContext } from '../../../context/BasketConext';



function UserNavbar() {
  const{favorites} = useContext(FavoritesContext)
  const{baskets} = useContext(BasketContext)
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">MyWebsite</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Main Menu</Nav.Link>
         
        </Nav>
        <Nav>
          <Nav.Link href="/favorites">
            <button className='btn btn-outline-primary'>
              <FaHeart />
              <span>{favorites.length}</span>
            </button>
            
          </Nav.Link>
          <Nav.Link href="/basket">
            <button className='btn btn-outline-danger'>
              <FaShoppingCart /> 
              <span>{baskets.length}</span>
            </button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default UserNavbar
