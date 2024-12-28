import React, { useEffect, useState } from 'react'
import { Container, Card, Spinner,Nav } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  let [book,setBook] = useState({})
  let [loading,setLoading] = useState(true)
  let [error,setError] = useState(null)
  function getBook(){
    axios.get("http://localhost:3000/books/" + id)
    .then((response) =>{
      setBook(response.data)
      setLoading(false)
    })
    .catch((err) => {
      setError(err);
      setLoading(false)
    })
  }
  useEffect(() =>{
    getBook()
  },[])
  if (loading) return <Spinner animation='border'/>;
  if (error) return <div>Error:{error.message}</div>
  return (
    <Container>
      {book && (
        <Card className="mt-5" style={{maxHeight:"700px",maxWidth:"300px"}}>
          <Card.Img src={book.imgUrl} alt="Book image" />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>Price: ${book.price}</Card.Text>
            <Card.Text>Topic: {book.subject}</Card.Text>
            <Nav.Link href={`/products`}>
                    <button className='btn btn-outline-warning'>
                      Back To Books
                    </button>
                  </Nav.Link>
          </Card.Body>
        </Card>
      )}
    </Container>
  )
}

export default ProductDetail
