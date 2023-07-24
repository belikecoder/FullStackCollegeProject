import React from 'react'
import './layout.css'
import Nav from './Components/NavBar'
import Products from './gjk'
import Footer from './Components/footer'
import Review from './review'
import Banner from './banner'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { selectUser } from './Components/redux/userSlice'
import Payment from './Components/Payments'
export default function Layout() {
    const user=useSelector(selectUser)
  return (
    <>
    <Nav/>
    <div class="home">
        <div class="main-text">
            
            <h1>Discover The Best <br/>Furnitures For You</h1>
            <p>Quality isn't Expensive, It's Priceless.</p>
            <p>We have 49 years of experience providing affordable and good-quality products. Get the best, unbeatable, value for money deals for Teakwood furniture.</p>
            <button id="btn">View More</button>
        </div>
    </div>
    <section class="offers">
        <div class="offer-content">
            <div class="row">
            <i class="fa-solid fa-truck-fast"></i>
                <h3>Free Delivery</h3>
                <p>We are providing free delivery to customers.</p>
            </div>
            <div class="row">
                <i class="fa-solid fa-headset"></i>
                <h3>Support 24/7</h3>
                <p>We are providing a 24/7 support to customers.</p>
            </div>
            <div class="row">
                <i class="fa-solid fa-rotate-left"></i>
                <h3>30 Day Return</h3>
                <p>Customers has 30 days to return the product.</p>
            </div>
            <div class="row">
                <i class="fa-solid fa-cart-shopping"></i>
                <h3>Secure Shopping</h3>
                <p>Customer details and payments are in secured manner.</p>
            </div>
        </div>
    </section>
    <Products/>
    <Banner/>
    <Review/>
    <Payment/>
    <Footer/>
    </>
  )
}
