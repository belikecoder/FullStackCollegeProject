import React from 'react'
import Nav from './NavBar'

import './sofa.css'
import sofa1 from './images//Arm/dw1.jpeg'
import sofa2 from'./images//Arm/dw2.jpeg'
import sofa3 from './images//Arm/dw3.jpeg'
import sofa4 from'./images//Arm/dw4.jpeg'
import sofa5 from './images//Arm/dw5.jpeg'
import sofa6 from './images//Arm/dw6.jpeg'
import sofa7 from'./images//Arm/dw7.jpeg'
import sofa8 from './images//Arm/dw8.jpeg'

export default function Arm() {
  return (
   <>
   <Nav/>
    <br></br>
    <br></br>
    <br></br>
   <section class="products">
		<h2>Our Armoires</h2>
 		<div class="all-products">
 			<div class="product1">
				<img src={sofa1}/>
				<div class="product-info">
 					<h4 class="product-title">Grey Wardobe 
 					</h4>
 					<p class="product-price">$129</p>
 					<a class="product-btn" href="#">Buy Now</a>

 				</div>
 			</div>
 			<div class="product1">
 				<img src={sofa2}/>
 				<div class="product-info">
 					<h4 class="product-title">Dresser
					</h4>
					<p class="product-price">$299</p>
 					<a class="product-btn" href="#">Buy Now</a>

				</div>
			</div>
			<div class="product1">
				<img src={sofa3}/>
				<div class="product-info">
					<h4 class="product-title">Closet 
					</h4>
 					<p class="product-price">$999</p>
 					<a class="product-btn" href="#">Buy Now</a>

				</div>
 			</div>
 			<div class="product1">
 				<img src={sofa4}/>
 				<div class="product-info">
 					<h4 class="product-title">Sold Wood
						</h4>
					<p class="product-price">$629*</p>
 					<a class="product-btn" href="#">Buy Now</a>

 				</div>
 			</div>
 			<div class="product1">
       <img src={sofa5}/>
 				<div class="product-info">
 					<h4 class="product-title">Astoria Wardrobe
						</h4>
					<p class="product-price">$629*</p>
 					<a class="product-btn" href="#">Buy Now</a>

 				</div>
 			</div>
 			<div class="product1">
 			<img src={sofa6}/>
 				<div class="product-info">
 					<h4 class="product-title">Wardrobe
						</h4>
					<p class="product-price">$629*</p>
 					<a class="product-btn" href="#">Buy Now</a>

 				</div>
 			</div>
 			<div class="product1">
       <img src={sofa7}/>
 				<div class="product-info">
 					<h4 class="product-title">Media Storage
						</h4>
					<p class="product-price">$629*</p>
 					<a class="product-btn" href="#">Buy Now</a>

 				</div>
 			</div>
 			<div class="product1">
       <img src={sofa8}/>
 				<div class="product-info">
 					<h4 class="product-title">Chiffarobe
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
