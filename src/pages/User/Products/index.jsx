import React, { useState, useEffect,  useContext } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Spinner, Nav } from 'react-bootstrap';
import { FaHeart, FaShoppingCart, FaInfo } from 'react-icons/fa';
import { FavoritesContext } from '../../../context/favoritesContext';
import { BasketContext } from '../../../context/BasketConext';


function Products({product  }) {
  let [books, setBooks] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);

  useEffect(() => {
    getBooks();
  }, []);
  const {addToFavorites } = useContext(FavoritesContext);
  const {addToBaskets} = useContext(BasketContext)




  function getBooks() {
    axios.get("http://localhost:3000/books")
      .then((respo) => {
        setBooks(respo.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }

  if (loading) return <Spinner animation="border" />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Container>
      <Row>
        {books.map(book => (
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
                  <button className='btn btn-outline-primary mx-2' onClick={()=>addToFavorites(book)}>
                    <FaHeart />
                  </button>
                  <button className='btn btn-outline-danger' onClick={()=>addToBaskets(book)}>
                    Add <FaShoppingCart />
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;