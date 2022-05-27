import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { Outlet } from "react-router-dom"

function App() {
  return (
    <div>

      <div className="side-main">

        <Navbar />
        <Outlet />
        
      </div>
      
    </div>

  );
}

export default App;
