import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from '../src/Components/form';
import Register from './Components/regis';
import NavBar from './layout';
import Profile from './profile';
import Contactus from './contactus';
import Sofa from './Components/sofa'
import AboutUs from './aboutUS'
  





export default function Home() {
  return (
   
    <>
     <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<NavBar/>} />
        <Route path="/form" element={<Signin/>} />
        <Route path="/regis" element={<Register/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/contactus" element={<Contactus/>} />
        <Route path="/sofa" element={<Sofa/>} />
        <Route path="/aboutUS" element={<AboutUs/>} />
      </Routes>
    </React.StrictMode>
  </Router>
    </>
  )
}

