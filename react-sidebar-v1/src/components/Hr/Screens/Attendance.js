import React, { useState } from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";

import { useNavigate } from "react-router-dom";


const Attendance=()=>{
   let history = useNavigate();
  return (
   
    <>
      <div className='App'>
        <header>
          <h1>Payroll Management System</h1>
          <hr className="Underline" />
          <img src={logo} alt="logo"></img>
        </header>
        <div className='wrapper'>
			 <div className="Login-button" 
			 onClick={() => history("/attendancelog")}>
			  <h4>Attendance Log</h4>
			</div>
			   <div className= "Login-button"   >
			  <h4>Mark Attendance</h4>
			</div> 
        </div>
      </div>
    </>
  );
};


export default Attendance;
