import React from 'react'
import {Spinner} from 'react-bootstrap'

export default function Loader() {
  return (
    <Spinner
      animation='grow'
      role='status'
      style={{
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block',
      }}>
      <span className='sr-only'>Loading...</span>
    </Spinner>
  )
}
