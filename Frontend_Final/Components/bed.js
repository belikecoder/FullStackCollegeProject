import React from 'react'
import Nav from './NavBar'
import '../bed.css'

import sofa1 from './images//Boosel/booksel.webp'
import sofa2 from './images//Beds/bed2.webp'
import sofa3 from './images//Beds/bed3.webp'
import sofa4 from './images//Beds/bed4.webp'
import sofa5 from './images//Beds/bed5.avif'
import sofa6 from './images//Beds/bed6.webp'
import sofa7 from './images//Beds/bed7.webp'
import sofa8 from './images//Beds/bed8.webp'
import sofa9 from './images//Beds/bed9.webp'


export default function Beds() {
  
  return (
   <>
          <Nav/>
    <br></br>
    <br></br>
    <br></br>
   <section class="products">
		<h2>Our Beds</h2>
 		<div class="all-products">
 			<div class="product1">
				<img src={sofa9}/>
				<div class="product-info">
 					<h4 class="product-title">Twin bed
 					</h4>
 					<p class="product-price">$129</p>
 					<a class="product-btn" href="#">Buy Now</a>

 				</div>
 			</div>
 			<div class="product1">
 				<img src={sofa2}/>
 				<div class="product-info">
 					<h4 class="product-title">Twin Xl bed
					</h4>
					<p class="product-price">$299</p>
 					<a class="product-btn" href="#">Buy Now</a>

				</div>
			</div>
			<div class="product1">
				<img src={sofa3}/>
				<div class="product-info">
					<h4 class="product-title">Four poster bed
					</h4>
 					<p class="product-price">$999</p>
 					<a class="product-btn" href="#">Buy Now</a>

				</div>
 			</div>
 			<div class="product1">
 				<img src={sofa4}/>
 				<div class="product-info">
 					<h4 class="product-title">Canepoy bed
						</h4>
					<p class="product-price">$629*</p>
 					<a class="product-btn" href="#">Buy Now</a>

 				</div>
 			</div>
 			<div class="product1">
       <img src={sofa5}/>
 				<div class="product-info">
 					<h4 class="product-title">Daybed 
						</h4>
					<p class="product-price">$629*</p>
 					<a class="product-btn" href="#">Buy Now</a>

 				</div>
 			</div>
 			<div class="product1">
 			<img src={sofa6}/>
 				<div class="product-info">
 					<h4 class="product-title">Trundle bed
						</h4>
					<p class="product-price">$629*</p>
 					<a class="product-btn" href="#">Buy Now</a>

 				</div>
 			</div>
 			<div class="product1">
       <img src={sofa7}/>
 				<div class="product-info">
 					<h4 class="product-title">Murphy bed
						</h4>
					<p class="product-price">$629*</p>
 					<a class="product-btn" href="#">Buy Now</a>

 				</div>
 			</div>
 			<div class="product1">
       <img src={sofa8}/>
 				<div class="product-info">
 					<h4 class="product-title">Loft bed
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
