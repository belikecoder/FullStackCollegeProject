import React from 'react'
import './about.css'
import  abuts from'./Components/images/abimg.avif'
export default function AboutUS() {
  return (
  <>
  <div class="centered">
  <div className="multi">

  ABOUT US
  </div>
  <div class="container">
    <div className="image-container">
  <img src={abuts} alt="Snow" className="custom-shape"/>
  </div>
  <br></br>
  <br></br>
  We believe that quality is non-negotiable. 
  <br></br>We handpick each item in our collection, partnering with 
  trusted manufacturers who <br></br>share our commitment to craftsmanship 
  and attention to detail. From the selection of premium materials to <br></br>
  the precision of the finishing touches, every piece undergoes rigorous quality 
  checks to ensure it meets our high standards. <br></br>We want you to enjoy your 
  furniture for years to come, which is why we prioritize durability and longevity in our product offerings.
  </div>
  <br></br>
 <footer>
  <h3>Contact Us With<br/>
  <a href=""></a><i class="fa fa-facebook-official" aria-hidden="true"></i>
  <a href=""></a><i class="fa fa-instagram" aria-hidden="true"></i>
  <a href=""></a><i class="fa fa-twitter" aria-hidden="true"></i>
  
  </h3>
</footer>
</div>
  </>
  )
}
