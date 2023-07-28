import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import Nav from './Components/NavBar';
import Footer from './Components/footer';
import About from './aboutUS';
import Products from './gjk';
import Review from './review';
import Banner from './banner';
import Profile from './profile';
import Signin from './Components/form';
import Register from './Components/regis';
import Sofa from './Components/sofa';
import Beds from './Components/bed';
import Cla from './Components/bookse';
import Din from './Components/din';
import Chair from './Components/chair';
import Draw from './Components/draw';
import Out from './Components/out';
import Arm from './Components/arm';
import CartPage from './Components/Cartpage';
import Cart from './Components/Cartpage';
import AddProduct from './Components/AddProduct';
import Payment from './Components/Payments';






export default function Home() {
  return (
   
    <>
     <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/form" element={<Signin/>} />
        <Route path="/Navbar" element={<Nav/>} />
  
        <Route path="/footer" element={<Footer/>} />
  
        <Route path="/aboutUs" element={<About/>} />
        <Route path="/gjk" element={<Products/>} />
        <Route path="/review" element={<Review/>} />
        <Route path="/banner" element={<Banner/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/" element={<Layout/>} />
        <Route path="/regis" element={<Register/>} />
        <Route path="/sofa" element={<Sofa/>} />
        <Route path="/bed" element={<Beds/>} />
        <Route path="/bookse" element={<Cla/>} />
        <Route path="/din" element={<Din/>} />
        <Route path="/chair" element={<Chair/>} />
        <Route path="/draw" element={<Draw/>} />
        <Route path="/out" element={<Out/>} />
        <Route path="/arm" element={<Arm/>} />
        <Route path="/Cartpage" element={<Cart/>} />
        <Route path="/Addproduct" element={<AddProduct/>} />
        <Route path="/pay" element={<Payment/>} />


      

  
  
        
  
  
  
        
        
      </Routes>
    </React.StrictMode>
  </Router>
    </>
  )
}

