import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Product({product}) {
  return (
    <Card
      className='my-3 p-3 rounded'
      style={{height: '20rem', textAlign: 'center'}}>
      <Link to={`/product/${product._id}`}>
        <Card.Img
          style={{height: '15rem', width: '15rem'}}
          src={product.image}
          variant='top'
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
      </Card.Body>
    </Card>
  )
}
