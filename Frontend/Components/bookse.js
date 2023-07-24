import React from 'react'
import Nav from './NavBar'

import './booksel.css'
import sofa1 from './images//Boosel/booksel.webp'
import sofa2 from './images//Boosel/booksel2.webp'
import sofa3 from './images//Boosel/boosel3.jpeg'
import sofa4 from'./images//Boosel/booksel4.jpg'
import sofa5 from './images//Boosel/booksel5.jpg'
import sofa6 from './images//Boosel/booksel6.webp'
import sofa7 from './images//Boosel/booksel7.webp'
import sofa8 from './images//Boosel/booksel8.jpeg'



export default function Cla() {

  return (
   <>
<Nav/>
    <br></br>
    <br></br>
    <br></br>
   <section class="products">
		<h2>Our BookCases</h2>
 		<div class="all-products">
 			<div class="product1">
				<img src={sofa1}/>
				<div class="product-info">
 					<h4 class="product-title">Cube Bookcase
 					</h4>
 					<p class="product-price">$129</p>
 					<a class="product-btn" href="#">Buy Now</a>

 				</div>
 			</div>
 			<div class="product1">
 				<img src={sofa2}/>
 				<div class="product-info">
 					<h4 class="product-title">Geomatric Bookcase
					</h4>
					<p class="product-price">$299</p>
 					<a class="product-btn" href="#">Buy Now</a>

				</div>
			</div>
			<div class="product1">
				<img src={sofa3}/>
				<div class="product-info">
					<h4 class="product-title">TreeShaped Bookcase
					</h4>
 					<p class="product-price">$999</p>
 					<a class="product-btn" href="#">Buy Now</a>

				</div>
 			</div>
 			<div class="product1">
 				<img src={sofa4}/>
 				<div class="product-info">
 					<h4 class="product-title">Steped Bookcase
						</h4>
					<p class="product-price">$629*</p>
 					<a class="product-btn" href="#">Buy Now</a>

 				</div>
 			</div>
 			<div class="product1">
       <img src={sofa5}/>
 				<div class="product-info">
 					<h4 class="product-title">Lined Bookcase
						</h4>
					<p class="product-price">$629*</p>
 					<a class="product-btn" href="#">Buy Now</a>

 				</div>
 			</div>
 			<div class="product1">
 			<img src={sofa6}/>
 				<div class="product-info">
 					<h4 class="product-title">Cornerd Bookcase
						</h4>
					<p class="product-price">$629*</p>
 					<a class="product-btn" href="#">Buy Now</a>

 				</div>
 			</div>
 			<div class="product1">
       <img src={sofa7}/>
 				<div class="product-info">
 					<h4 class="product-title">Cube Bookcase
						</h4>
					<p class="product-price">$629*</p>
 					<a class="product-btn" href="#">Buy Now</a>

 				</div>
 			</div>
 			<div class="product1">
       <img src={sofa8}/>
 				<div class="product-info">
 					<h4 class="product-title">ButterFly Bookcase
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
