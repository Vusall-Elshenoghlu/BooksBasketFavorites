import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <div className="text-center" style={{ padding: '150px 20px', backgroundColor: '#f8f9fa',height:"60vh" }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#343a40' }}>Welcome to Book Store</h1>
      <p style={{ fontSize: '1.5rem', color: '#6c757d' }}>
         <Nav.Link href="/products"><button>Books</button></Nav.Link>
      </p>
    </div>
    </div>
  )
}

export default Home
