import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
const Allowance = ({ inputs, title }) => {
      function fieldChangeHandler(event){
        const target = event.target
        const {name, value} = target
      
      }
      
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />

        <div className="top">
          <h1>Allowance</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
            {inputs.map((input) => (
                
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label> 
                    <input 
                      type={input.type}
                      placeholder={input.placeholder}
                      value={input.type}
                      name={input.name}
                      onChange={fieldChangeHandler}
                      required
                      />
                </div>
              ))}
            </form>
       </div>
        </div>
      </div>
    </div>
  );
};

export default Allowance;
