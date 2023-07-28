import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom';

export default function Nav() {


     
  return (
   <>
   <div class="header">
        <nav>
            <input type="checkbox" id="show-search"/>
            <input type="checkbox" id="show-menu"/>
            <label for="show-menu" class="menu-icon"><i class="fas fa-bars"></i></label>
            <div class="content">
                <div class="logo"><a href="index.html"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ86kWIy7Scu0qDOFHhmN7AVyeAtA7HxyRgHQ&usqp=CAU" alt=""/></a></div>
                <ul class="links">
                    <li><Link to="/" id="first">Home</Link></li>
                    <li><Link to="/aboutUs">About</Link></li>
                    <li><a href="#product">Products</a></li>
                    <li><a href="#review">Reviews</a></li>
                    <li><Link to="/form">Signin</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/AddProduct">Advirtise</Link></li>
                    {/* <li><Link to="/CartPage"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16"> */}
  {/* <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> */}
{/* </svg>Cart</Link></li> */}
                    
                  </ul>
            </div>
            <label for="show-search" class="search-icon"><i class="fas fa-search"></i></label>
            <form action="/.php" class="search-box">
                <input type="text" placeholder="Search" required/>
                <button type="submit" class="go-icon"><i class="fas fa-long-arrow-alt-right"></i></button>
            </form>
        </nav>
    </div>

   </>
  )
}
