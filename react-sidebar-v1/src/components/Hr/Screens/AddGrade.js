import React, { useState } from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";

const AddGrade = () => {
const [formData, setFormData] = useState({
  grade_id: "",
  grade_name: "", 
  basic_pay: "", 
  grade_pf: "", 
  grade_bonus: "", 
  grade_ta: "",
   grade_da: "",
});

const [items, setItems] = useState([{
  grade_id: "",
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
}, [items])


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


function addgrade(event) {
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
            <label>Grade ID : </label>
            <input
              type="text"
              id="grade_id"
              name="grade_id"
              onChange={fieldChangeHandler}
                value={formData.grade_id}
            />
          </div>
          <div className="form-control">
            <label>Grade Name : </label>
            <input
              type="text"
              id="grade_name"
              name="grade_name"
              onChange={fieldChangeHandler}
                value={formData.grade_name}
            />
          </div>
          <div className="form-control">
            <label>Basic Pay : </label>
            <input
              type="number"
              id="basic_pay"
              name="basic_pay"
              onChange={fieldChangeHandler}
                value={formData.basic_pay}
            />
          </div>
          <div className="form-control">
            <label>Grade PF : </label>
            <input
              type="text"
              id="grade_pf"
              name="grade_pf"
              onChange={fieldChangeHandler}
                value={formData.grade_pf}
            />
          </div>
          <div className="form-control">
            <label>Bonus : </label>
            <input
               type="number"
               id="grade_bonus"
               name="grade_bonus"
               onChange={fieldChangeHandler}
                 value={formData.grade_bonus}
            />
          </div>
          <div className="form-control">
            <label>Travel Allowance : </label>
            <input
              type="text"
              id="grade_ta"
              name="grade_ta"
              onChange={fieldChangeHandler}
                value={formData.grade_ta}
            />
          </div>
          <div className="form-control">
            <label>Dearness Allowance : </label>
            <input
              type="text"
              id="grade_da"
              name="grade_da"
              onChange={fieldChangeHandler}
                value={formData.grade_da}
            />
          </div>
          <button onClick={addgrade}>add Grade</button>
        </form>
      </div>
    </div>
  );
};

export default AddGrade;
