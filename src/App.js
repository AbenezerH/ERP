import React from 'react'
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import Navbar from './components/Navbar.js';
import {BrowserRouter as BrowserRouter,Route,Routes}from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <section> 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/home" element={<Navbar />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/login" element={<Login />}/>   
    </Routes>
  </BrowserRouter>
  </section>














  
  );
}

export default App;
