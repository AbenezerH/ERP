import React, { useState } from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";

const AddGrade = () => {
const [formData, setFormData] = React.useState({
  grade_name: "",
  basic_pay: "",
  grade_pf: "",
  grade_bonus: "",
  grade_ta: "",
  grade_da: "",
});

const [items, setItems] = React.useState([{
  grade_name: "",
  basic_pay: "",
  grade_pf: "",
  grade_bonus: "",
  grade_ta: "",
  grade_da: "",
}]);
React.useEffect(() => {
  fetch("http://localhost:3000/erpdatabase/hr/addGrade")
      .then(res => res.json())
          .then(data => {
              setItems(data);
          })
      .catch(error => console.log(error))
}, [])


function fieldChangeHandler(event){
  const target = event.target
  const {name, value} = target


  setFormData(prevData => {
      return {
          ...prevData,
          [name]: value
      } 
  })

}


function addGrade(event) {
  fetch("http://localhost:3000/erpdatabase/hr/addGrade", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
  }).then(res => res.json())
      .then(data => console.log("add " + data))
  .catch(err => console.log("error " + err))

  console.log("Add grade")

}

  return (
    <div> 
      <div className="Addgrade">
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
                value={formData.grade_name}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Bonus">Bonus : </label>
            <input
              type="number"
              placeholder="Bonus"
              name="Bonus"
              onChange={fieldChangeHandler}
                value={formData.grade_bonus}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Travel_Allowance">Travel Allowance : </label>
            <input
              type="number"
              placeholder="Travel_Allowance"
              name="Travel_Allowance"
              onChange={fieldChangeHandler}
                value={formData.grade_ta}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Dearness_Allowance">Dearness Allowance : </label>
            <input
              type="number"
              placeholder="Dearness_Allowance"
              name="Dearness_Allowance"
              onChange={fieldChangeHandler}
                value={formData.grade_da}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Basic_Pay">Basic Pay : </label>
            <input
              type="number"
              placeholder="Basic_Pay"
              name="Basic_Pay"
              onChange={fieldChangeHandler}
                value={formData.basic_pay}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Grade_PF">Grade PF : </label>
            <input
              type="number"
              placeholder="Grade_PF"
              name="Grade_PF"
              onChange={fieldChangeHandler}
                value={formData.grade_pf}
            />
          </div>
          <button onClick={addGrade}>add Grade</button>
        </form>
      </div>
    </div>
  );
};

export default AddGrade;
