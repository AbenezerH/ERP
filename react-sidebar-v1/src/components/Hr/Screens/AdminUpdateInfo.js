import React, { useState, useEffect } from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";
import AddEmployee from "./AddEmployee.js";
import { useNavigate } from "react-router-dom";
//testData used for testing.It is to be replaced by employee's db

const AdminUpdateInfo = () => {
  // const [search, setSearch] = useState(0);
  const [emp, setEmp] = useState([]);
  const [callUpdate, setCallUpdate] = useState(false);
  const history = useNavigate();
  const upDate = () => {
    setCallUpdate(true);
    document.getElementById("id01").style.display = "block";
  };
  const handleUpdate = (emp) => {
    history("/updateProfile", { email: emp.email });
  };
  const handleDelete = async (emp) => {
    console.log(emp)
  };
  return (
    <div className="App">
      <header>
        <h1>Payroll Management System</h1>
        <hr className="Underline" />
        <img src={logo} alt="logo"></img>
      </header>
      <div class="w3-container">
        <table class="w3-table w3-bordered">
          {emp.map((Emp) => (
            <tr key={Emp.e_id}>
              <td>{Emp.name}</td>
              <td>
                <button onClick={() => handleUpdate(Emp)}>Edit</button>
              </td>
              <td>
                <button
                  style={{ backgroundColor: "#f43d3d" }}
                  onClick={() => handleDelete(Emp)}
                >
                  <h4>Delete</h4>
                </button>
              </td>
            </tr>
          ))}
        </table>
        <div id="id01" class="w3-modal">
          <div class="w3-modal-content">
            <div class="w3-container">
              <h4></h4>
              <AddEmployee></AddEmployee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUpdateInfo;
