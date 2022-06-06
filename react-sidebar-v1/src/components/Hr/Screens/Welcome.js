import React from "react";
import "../StyleSheets/Welcome.css";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const history = useNavigate()
  return (
    <div className="App">
      <header>
        <h1>Payroll Management System</h1>
        <hr className="Underline" />
      </header>
      
      <div className="Login">
        <button className="Login-button" onClick={()=>history('/adminLogin')}>
          Admin Login
        </button>
        <button className="Login-button" onClick={() => history('/employeeLogin')}>
          Employee Login
        </button>
      </div>
    </div>
  );
};

export default Welcome;
