import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner, Button, Nav } from 'react-bootstrap';
import { FaPlus, FaInfo, FaTrash, FaEdit } from 'react-icons/fa';
import axios from 'axios';

function AdminProducts() {
  const [bookTable, setBookTable] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function getAllBooks() {
    axios
      .get("http://localhost:3000/books")
      .then((respo) => {
        setBookTable(respo.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }

  useEffect(() => {
    getAllBooks();
  }, []);

  if (loading) return <Spinner animation="border" />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between mb-3">
        <h3>Books Table</h3>
        <Nav.Link href={`addproduct`}>
          <Button variant="success">
            <FaPlus className="me-2" />
            Add Book
          </Button>
        </Nav.Link>
      </div>
      <table className="table table-striped table-bordered table-light table-hover">
        <thead className="table-dark">
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Topic</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookTable.map((book) => (
            <tr key={book.id}>
              <td>
                <img
                  src={book.imgUrl}
                  alt={book.title}
                  style={{ height: "50px", width: "50px", objectFit: "cover" }}
                />
              </td>
              <td>{book.title}</td>
              <td>${book.price}</td>
              <td>{book.subject}</td>
              <td>
                <div className="d-flex gap-2">
                  <Nav.Link href={`/products/${book.id}`}>
                    <button className='btn btn-outline-primary'>
                      <FaInfo className='mb-1' /> Detail
                    </button>
                  </Nav.Link>
                  <Nav.Link href={`editproduct`}>
                    <button className='btn btn-outline-warning'>
                      <FaEdit className='mb-1' /> Edit
                    </button>
                  </Nav.Link>
                  <Button variant="danger" size="sm">
                    <FaTrash className="me-1" /> Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminProducts;
