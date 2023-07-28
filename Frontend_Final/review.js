import React from 'react'
import './review.css'

export default function Review() {
  return (
    <>
    <section class="review" id="review">
        <div class="main-txt">
            <h3>Customers <span>Review</span></h3>
        </div>
        <div class="review-content">
        <div class="box">
        <div class="img">
            <img src="https://static8.depositphotos.com/1207999/1027/i/450/depositphotos_10275817-stock-photo-business-man.jpg" alt=""/>
        </div>
        <h3>SREEHARI</h3>
        <div class="star">
            <i class="fa-solid fa-star checked"></i>
            <i class="fa-solid fa-star checked"></i>
            <i class="fa-solid fa-star checked"></i>
            <i class="fa-solid fa-star checked"></i>
            <i class="fa-solid fa-star checked"></i>
        </div>
        <p>We have faith in Elite and in their product range. Quality branded product.</p>
    </div>
        <div class="box">
        <div class="img">
            <img src="https://static8.depositphotos.com/1207999/1027/i/450/depositphotos_10275817-stock-photo-business-man.jpg" alt=""/>
        </div>
        <h3>VIGNESH</h3>
        <div class="star">
            <i class="fa-solid fa-star checked"></i>
            <i class="fa-solid fa-star checked"></i>
            <i class="fa-solid fa-star checked"></i>
            <i class="fa-solid fa-star checked"></i>
            <i class="fa-solid fa-star checked"></i>
        </div>
        <p>Very satisfied with the work. Will work again in the future. Luxurious look and durability.</p>
    </div>
        <div class="box">
        <div class="img">
            <img src="https://static8.depositphotos.com/1207999/1027/i/450/depositphotos_10275817-stock-photo-business-man.jpg" alt=""/>
        </div>
        <h3>TARUN</h3>
        <div class="star">
            <i class="fa-solid fa-star checked"></i>
            <i class="fa-solid fa-star checked"></i>
            <i class="fa-solid fa-star checked"></i>
            <i class="fa-solid fa-star checked"></i>
            <i class="fa-solid fa-star checked"></i>
        </div>
        <p>Good product and timely delivery. Satisfied with showroom visit.</p>
    </div>
</div>
    </section>
    </>
  )
}
