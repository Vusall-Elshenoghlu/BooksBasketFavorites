import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Spinner, Nav } from 'react-bootstrap';
import { FaHeart, FaShoppingCart, FaInfo, FaTrash } from 'react-icons/fa';
import { FavoritesContext } from '../../../context/favoritesContext';


function Favorites() {
  let { favorites, removeFromFavorites } = useContext(FavoritesContext)
  return (
    <>{
      favorites.length == 0 ? (
        <h1>There is no Favorites...</h1>
      ) : (
        <Container>
          <Row>
            {favorites.map(book => (
              <Col md={3} key={book.id} className="mb-5">
                <Card className='card'>
                  <Card.Img src={book.imgUrl} alt="Card image" />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                      Price: ${book.price}
                    </Card.Text>
                    <Card.Text>
                      Topic: {book.subject}
                    </Card.Text>
                    <div className="d-flex justify-content-center">
                      <Nav.Link href={`/products/${book.id}`}>
                        <button className='btn btn-outline-warning'>
                          <FaInfo />
                        </button>
                      </Nav.Link>
                      <button className='btn btn-outline-danger mx-2' onClick={() => removeFromFavorites(book.id)}>
                        <FaTrash />
                      </button>
                      <button className='btn btn-outline-primary' >
                        Add <FaShoppingCart />
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )
    }</>
  )
}

export default Favorites
