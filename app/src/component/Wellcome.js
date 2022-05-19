import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Redirect } from "react-router-dom";

const Welcome = () => {
  const [showId] = useState(0);
  console.log("Value set to ", showId);
  return (
    <div className="App">
      <header>
        <h1>Payroll Management System</h1>
        <hr className="Underline" />
      </header>
      <div className="Login">
        <button className="Login-button" onClick={()=><Redirect to="/adminLogin"/>}>
          Admin Login
        </button>
        <button className="Login-button" onClick={() => <Redirect to="/EmployeeLogin"/>}>
          Employee Login
        </button>
      </div>
      <div class="Film"></div>
    </div>
  );
};
export default Welcome;
