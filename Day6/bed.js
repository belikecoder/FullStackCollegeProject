import React from 'react'
import Nav from './NavBar'
import SofaItem from './sofadummy'
import '../bed.css'

import sofa1 from './images/sofa1.avif'
import sofa2 from './images/sofa2.jpeg'
import sofa3 from './images/sofa3.jpeg'
import sofa4 from './images/sofa4.jpeg'
import sofa5 from './images/sofa5.jpeg'
import sofa6 from './images/sofa6.jpg'
import sofa7 from './images/sofa7.avif'
import sofa8 from './images/sofa8.jpg'
import sofa9 from './images/sofa9.webp'

export default function Beds() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      imageUrl: sofa1 ,
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 49.99,
      imageUrl: sofa2 ,
      rating: 3.8,
    },
    {
      id: 3,
      name: 'Black and White Dining Table Setting',
      price: 99.99,
      imageUrl: sofa3 ,
      rating: 4.2,
    },
    {
      id: 4,
      name: 'Product 1',
      price: 29.99,
      imageUrl: sofa4,
      rating: 4.5,
    },
    {
      id: 5,
      name: 'Product 2',
      price: 49.99,
      imageUrl: sofa5,
      rating: 3.8,
    },
    {
      id: 6,
      name: 'Product 3',
      price: 99.99,
      imageUrl: sofa6,
      rating: 4.2,
    },
    {
      id: 7,
      name: 'Product 3',
      price: 99.99,
      imageUrl: sofa7,
      rating: 4.2,
    },
    {
      id: 8,
      name: 'Product 3',
      price: 99.99,
      imageUrl: sofa8,
      rating: 4.2,
    },
    {
      id: 9,
      name: 'Product 3',
      price: 99.99,
      imageUrl: sofa9,
      rating: 4.2,
    },
  ]
  return (
   <>
   <Nav/>
   
   <div className='dinning_productList'>
        <div className="h1">
     <h3>Beds</h3>
     </div>
      <div className="product-list">
        {products.map((product) => (
          <SofaItem key={product.id} product={product} />
        ))}
      </div>
    </div>

  
   </>
  )
}
