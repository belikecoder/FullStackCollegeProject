import React from 'react'
import Nav from './NavBar'
import DinItem from './dindummy'
import './sofa.css'
import sofa1 from './images/dinnings/din1.webp'
import sofa2 from './images/dinnings/din2.webp'
import sofa3 from './images/dinnings/din3.jpg'
import sofa4 from './images/dinnings/din4.webp'
import sofa5 from './images/dinnings/din5.webp'
import sofa6 from './images/dinnings/din6.jpeg'
import sofa7 from './images/dinnings/din7.jpg'
import sofa8 from './images/dinnings/din8.webp'
import sofa9 from './images/dinnings/din9.webp'

export default function Din() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 900000,
      imageUrl: sofa1 ,
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 457812,
      imageUrl: sofa2 ,
      rating: 3.8,
    },
    {
      id: 3,
      name: 'Black and White Dining Table Setting',
      price: 124578,
      imageUrl: sofa3 ,
      rating: 4.2,
    },
    {
      id: 4,
      name: 'Product 1',
      price: 297599,
      imageUrl: sofa4,
      rating: 4.5,
    },
    {
      id: 5,
      name: 'Product 2',
      price: 165999,
      imageUrl: sofa5,
      rating: 3.8,
    },
    {
      id: 6,
      name: 'Product 3',
      price: 450000,
      imageUrl: sofa6,
      rating: 4.2,
    },
    {
      id: 7,
      name: 'Product 3',
      price:378495,
      imageUrl: sofa7,
      rating: 4.2,
    },
    {
      id: 8,
      name: 'Product 3',
      price: 400000,
      imageUrl: sofa8,
      rating: 4.2,
    },
    {
      id: 9,
      name: 'Product 3',
      price: 720000,
      imageUrl: sofa9,
      rating: 4.2,
    },
  ]
  return (
   <>
   <Nav/>
   
   <div className='dinning_productList'>
        <div className="h1">
     <h3>Dinning table</h3>
     </div>
      <div className="product-list">
        {products.map((product) => (
          <DinItem key={product.id} product={product} />
        ))}
      </div>
    </div>

  
   </>
  )
}
