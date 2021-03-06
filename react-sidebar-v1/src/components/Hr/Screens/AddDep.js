import React, { useState} from "react";
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";

const AddDep = () => {
 
  const [formData, setFormData] = useState({
    dept_id: "",
    dept_name: "", 
    branch: "",
  });
  
  const [items, setItems] = useState([{
    dept_id: "",
    dept_name: "", 
    branch: "",
  }]);
  React.useEffect(() => {
    fetch("http://localhost:3000/erpdatabase/hr/addDepartment")
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
  
  
  function addep(event) {
    fetch("http://localhost:3000/erpdatabase/hr/addDepartment", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(res => res.json())
        .then(data => console.log("add " + data))
    .catch(err => console.log("error " + err))
  
    console.log("Add department")
  
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
            <label htmlFor="dep_Name">Dep ID : </label>
            <input
              type="text"
              id="dept_id"
              name="dept_id"
              onChange={fieldChangeHandler}
              value={formData.dept_id}
            />
          </div>

          <div className="form-control">
            <label htmlFor="org_Name">Department Name : </label>
            <input
              type="text"
              id="dept_name"
              name="dept_name"
              onChange={fieldChangeHandler}
                value={formData.dept_name}
            />
          </div>
          <div className="form-control">
            <label htmlFor="org_Name">Branch Name : </label>
            <input
              type="text"
              id="branch"
              name="branch"
              onChange={fieldChangeHandler}
                value={formData.branch}
            />
          </div>
          <button onClick={addep}>add department</button>
        </form>
      </div>
    </>
  );
};

export default AddDep;
