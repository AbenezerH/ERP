import React, { useState } from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";
const AddExtras = () => {
  const [formData, setFormData] = useState({
    ex_type: "",
    ex_id: "",
  });
  
  const [items, setItems] = useState([{
    ex_type: "",
    ex_id: "",
  }]);
  React.useEffect(() => {
    fetch("http://localhost:3000/erpdatabase/hr/addExtras")
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
  
  
  function addExtras(event) {
    fetch("http://localhost:3000/erpdatabase/hr/addExtras", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(res => res.json())
        .then(data => console.log("add " + data))
    .catch(err => console.log("error " + err))
  
    console.log("Add extra")
  
  }
  
  
  return (
    <>
      <div className="App">
        <header>
          <h1>Payroll Management System</h1>
          <hr className="Underline" />
          <img src={logo} alt="logo"></img>
        </header>
        <form className="form" >
        <div className="form-control">
          <label htmlFor="dep_Name">Extras ID : </label>
            <input
              type="text"
              id="ex_type"
              name="ex_type"
              onChange={fieldChangeHandler}
                value={formData.ex_type}
            />
          </div>
          <div className="form-control">
          <label htmlFor="dep_Name">Extras ID : </label>
            <input
              type="text"
              id="ex_id"
              name="ex_id"
              onChange={fieldChangeHandler}
                value={formData.ex_id}
            />
          </div>

          <button  onClick={addExtras}>add extras</button>
        </form>
      </div>
    </>
  );
};

export default AddExtras;
