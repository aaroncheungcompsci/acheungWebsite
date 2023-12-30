'use client'; // client side rendering
import React from 'react'

const AddToCart = () => {
  //use this example if trying to use a function on button click, otherwise use anchor tag for navigation
  return (
    <div>
      <button className="btn btn-primary" onClick={() => console.log('Click')}>Add to Cart</button>
    </div>
  )
}

export default AddToCart
