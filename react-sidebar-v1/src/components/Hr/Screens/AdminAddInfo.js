import React from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import {useNavigate} from "react-router-dom";
const AdminAddInfo=()=>{
    const history = useNavigate();
    
    return <div className="App">
      <header>
        <h1>Payroll Management System</h1>
        <hr className="Underline" />
        <img src={logo} alt="logo"></img>
      </header>
      <div className='Login' style={{marginTop:'2rem'}}>
        <div style={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"row"}}>
          <div className='Login-button' onClick={()=>history('/addemployee')}>
          <h4>Employee</h4>
        </div>
        <div className='Login-button' onClick={()=>history('/addDepartment')}>
          <h4>Department</h4>
        </div>
        <div className='Login-button' onClick={()=>history('/addorg')}>
          <h4>Organization</h4>
        </div>
        </div>

        <div style={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"row"}}>
          <div className='Login-button' onClick={()=>history('/addGrade')} >
            <h4>Grade</h4>
          </div>
          <div className='Login-button' onClick={()=>history('/addExtras')} >
            <h4>Extras</h4>
          </div>
        </div>
        
        
      </div>
    </div>
}

export default AdminAddInfo;