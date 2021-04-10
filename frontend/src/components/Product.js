import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Rating from './Rating'

export default function Product({product}) {
  return (
    <Card className='my-3 p-3 rounded' style={{height: '25rem'}}>
      <Link style={{margin: 'auto'}} to={`/product/${product._id}`}>
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
        <Card.Text as='div'>
          <div className='my-3'>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color={'#f8e825'}
            />
          </div>
        </Card.Text>
        <Card.Text as='h3'>
          <div className='my-3'>₹{product.price}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
