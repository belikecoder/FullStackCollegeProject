import React from 'react'
import { useNavigate,Link } from 'react-router-dom';
import './layout.css'
export default function NavBar() {
  return (
    <>
    <div class="nav">
        <div className="post">
        <div className="head">
  <Link to="/"class="active"><h2 className="name">HOME</h2></Link>
  <Link to="/form"><h2 className="name">SIGNIN</h2></Link>
  <Link to="/regis"><h2 className="name">SIGNUP</h2></Link>
  </div>
  </div>
  </div>
<section class="home" id="home">

    <div class="content">
        <h3>Home World Of Furnitures</h3>
        <p>Furniture is something that turns a house into the home. And, getting the furniture for your home allover the world  is now easy with Artvan. It provides you with the ready-made and customized solid wood furniture. Take a pick from the astounding collection or get it personalized as per your requirements, all possible only at World of wood.</p>
    </div>

</section>
<section class="speciality" id="speciality">

    <h1 class="heading"> our <span>speciality</span> </h1>

    <div class="box-container">

        <div class="box">
        <img class="image" src="E:\New Projects\myprojects\src\Components\symimg.png" alt=""/>
            <div class="content">
                <h3>Sofas</h3>
                <p>If a single piece of furniture has the ability to define the style of a personal living space, that piece would be the sofa. Available in a range of styles -- with a variety of functions -- a sofa can be functional or whimsical, period or contemporary, single or sectional. In each instance the sofa, as a signature object, defines the space in which it sits.</p>
            </div>
        </div>
        </div>
        </section>


    </>
  )
}
