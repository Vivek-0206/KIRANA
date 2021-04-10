import React, {useEffect, useState} from 'react'
import {Col, Row} from 'react-bootstrap'
import axios from 'axios'

import Product from '../components/Product'

export default function HomeScreen() {
  const [products, setproducts] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      const {data} = await axios.get('/api/products')
      setproducts(data)
    }

    fetchProducts()
  }, [])
  return (
    <>
      <h1>Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}
