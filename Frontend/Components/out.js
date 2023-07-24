import React from 'react'
import Nav from './NavBar'

import './sofa.css'
import sofa1 from './images//Out/dw1.jpeg'
import sofa2 from'./images//Out/dw2.jpeg'
import sofa3 from './images//Out/dw3.jpeg'
import sofa4 from'./images//Out/dw4.jpeg'
import sofa5 from './images//Out/dw5.jpeg'
import sofa6 from './images//Out/dw6.jpeg'
import sofa7 from'./images//Out/dw7.jpeg'
import sofa8 from './images//Out/dw8.jpeg'

export default function Out() {
  return (
   <>
   <Nav/>
    <br></br>
    <br></br>
    <br></br>
   <section class="products">
		<h2>Our OutDoor Furnitures</h2>
 		<div class="all-products">
 			<div class="product1">
				<img src={sofa1}/>
				<div class="product-info">
 					<h4 class="product-title">Patio
 					</h4>
 					<p class="product-price">$129</p>
 					<a class="product-btn" href="#">Buy Now</a>

 				</div>
 			</div>
 			<div class="product1">
 				<img src={sofa2}/>
 				<div class="product-info">
 					<h4 class="product-title">Wickers
					</h4>
					<p class="product-price">$299</p>
 					<a class="product-btn" href="#">Buy Now</a>

				</div>
			</div>
			<div class="product1">
				<img src={sofa3}/>
				<div class="product-info">
					<h4 class="product-title">Couch
					</h4>
 					<p class="product-price">$999</p>
 					<a class="product-btn" href="#">Buy Now</a>

				</div>
 			</div>
 			<div class="product1">
 				<img src={sofa4}/>
 				<div class="product-info">
 					<h4 class="product-title">Wong iron table
						</h4>
					<p class="product-price">$629*</p>
 					<a class="product-btn" href="#">Buy Now</a>

 				</div>
 			</div>
 			<div class="product1">
       <img src={sofa5}/>
 				<div class="product-info">
 					<h4 class="product-title">Synthetic Ratten Garden
						</h4>
					<p class="product-price">$629*</p>
 					<a class="product-btn" href="#">Buy Now</a>

 				</div>
 			</div>
 			<div class="product1">
 			<img src={sofa6}/>
 				<div class="product-info">
 					<h4 class="product-title">Picnic table set
						</h4>
					<p class="product-price">$629*</p>
 					<a class="product-btn" href="#">Buy Now</a>

 				</div>
 			</div>
 			<div class="product1">
       <img src={sofa7}/>
 				<div class="product-info">
 					<h4 class="product-title">Adirondack
						</h4>
					<p class="product-price">$629*</p>
 					<a class="product-btn" href="#">Buy Now</a>

 				</div>
 			</div>
 			<div class="product1">
       <img src={sofa8}/>
 				<div class="product-info">
 					<h4 class="product-title">Eames Longe 
						</h4>
					<p class="product-price">$629*</p>
 					<a class="product-btn" href="#">Buy Now</a>

 				</div>
 			</div>
 		</div>
 	</section>
   
   </>
  )
}
