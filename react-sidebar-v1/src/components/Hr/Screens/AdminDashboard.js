import React, { useState } from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
 
  // console.log("Value set to ", showId);
  let history = useNavigate();

  return (
    <div className="App">
      <header>
        <h1>Payroll Management System</h1>
        <hr className="Underline" />
        <img src={logo} alt="logo"></img>
      </header>
      <div
        className="Login"
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          alignSelf: "center",
          display: "flex",
          flexDirection: "row",
          }}
      >
        <div
          className="Login-button"
          onClick={() => history("/adminAddInfo")}
        >
          <h4>Add Information</h4>
        </div>
        <div className="Login-button"
            onClick={() => history("/adminUpdateInfo")}>
          <h4>Update Info</h4>
        </div>
      </div>

      <div className="Film"></div>
    </div>
  );
};

export default AdminDashboard;
