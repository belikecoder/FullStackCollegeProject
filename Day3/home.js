import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from '../src/Components/form';
import Register from './Components/regis';
import NavBar from './layout';


export default function Home() {
  return (
   
    <>
     <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<NavBar/>} />
        <Route path="/form" element={<Signin/>} />
        <Route path="/regis" element={<Register/>} />
      </Routes>
    </React.StrictMode>
  </Router>
    </>
  )
}

