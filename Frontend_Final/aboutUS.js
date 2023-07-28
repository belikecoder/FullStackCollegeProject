import React from 'react'
import './about.css'
import Nav from './Components/NavBar'
import Footer from './Components/footer'
export default function About() {
  return (
   <>
   <Nav/>
   <section class="about" id="about">
        <div class="about-img">
            <img src="https://img.freepik.com/free-vector/about-us-concept-illustration_114360-669.jpg" alt=""/>
        </div>
        <div class="about-text">
            <h3>Furniture service About us</h3>
            <p>Our philosophy is to provide unique products of good quality at reasonable prices. 

Our Stores deal with furniture made with some of the world's most durable woods like Teakwood.

Our group consists of furniture manufacturers. <br></br>Our new manufacturing factory is equipped with the <br/>latest machinery to deliver products on time. We do customized furniture. </p>
            <button id="about-btn">Read More...</button>
        </div>
        
    </section>
    <Footer/>
   </>
  )
}
