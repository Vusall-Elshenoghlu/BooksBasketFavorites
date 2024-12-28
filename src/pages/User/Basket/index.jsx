import React, { useContext } from 'react'
import { BasketContext } from '../../../context/BasketConext'
import { Nav } from 'react-bootstrap'
function Basket() {
  const {baskets,setBaskets} = useContext(BasketContext)
  function handleDecrease(book){
    book.count --

    setBaskets([...baskets])
  }
  function handleIncrease(book){
    book.count ++

    setBaskets([...baskets])
  }
  return (
    <>
      <table className="table table-striped table-bordered table-light table-hover">
        <thead className="table-dark">
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Topic</th>
            <th>Price</th>
            <th>Total Price</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {baskets.map((book) => (
            <tr key={book.id}>
              <td>
                <img
                  src={book.imgUrl}
                  alt={book.title}
                  style={{ height: "50px", width: "50px", objectFit: "cover" }}
                />
              </td>
              <td>{book.title}</td>
              <td>{book.subject}</td>
              <td>${book.price}</td>
              <td>${book.price * book.count}</td>
              <td>
                <div className="d-flex gap-2">
                  <button onClick={()=> handleDecrease(book)}>-</button>
                  {book.count}
                  <button onClick={() =>handleIncrease(book)}>+</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Basket
