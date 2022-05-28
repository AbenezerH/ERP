import React, { useState } from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";

const AddGrade = () => {
  const [data, setData] = React.useState({
    grade_name: "",
    basic_pay: "",
    grade_pf: "",
    grade_bonus: "",
    grade_ta: "",
    grade_da: "",
});


React.useEffect(() => {
    fetch("http://localhost:3000/erpdatabase/hr/2")
        .then(res => res.json())
            .then(data => console.log(data))
        .catch(error => console.log(error))
}, [])


function fieldChangeHandler(event){
    const target = event.target
    const {name, value, type} = target


    setData(prevData => {
        return {
            ...prevData,
            [name]: value
        } 
    })

}


 
  return (
    <> 
      <div className="App">
        <header>
          <h1>Payroll Management System</h1>
          <hr className="Underline" />
          <img src={logo} alt="logo"></img>
        </header>
        <form className="form">
          <div className="form-control">
            <label htmlFor="Grade_Name">Grade Name : </label>
            <input
              type="text"
              placeholder="Grade_Name"
              name="Grade_Name"
              onChange={fieldChangeHandler}
                value={data.grade_name}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Bonus">Bonus : </label>
            <input
              type="number"
              placeholder="Bonus"
              name="Bonus"
              onChange={fieldChangeHandler}
                value={data.grade_bonus}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Travel_Allowance">Travel Allowance : </label>
            <input
              type="number"
              placeholder="Travel_Allowance"
              name="Travel_Allowance"
              onChange={fieldChangeHandler}
                value={data.grade_ta}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Dearness_Allowance">Dearness Allowance : </label>
            <input
              type="number"
              placeholder="Dearness_Allowance"
              name="Dearness_Allowance"
              onChange={fieldChangeHandler}
                value={data.grade_da}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Basic_Pay">Basic Pay : </label>
            <input
              type="number"
              placeholder="Basic_Pay"
              name="Basic_Pay"
              onChange={fieldChangeHandler}
                value={data.basic_pay}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Grade_PF">Grade PF : </label>
            <input
              type="number"
              placeholder="Grade_PF"
              name="Grade_PF"
              onChange={fieldChangeHandler}
                value={data.grade_pf}
            />
          </div>
          <button type="submit">add Grade</button>
        </form>
      </div>
    </>
  );
};

export default AddGrade;
