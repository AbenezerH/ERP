import React, { useState} from 'react'
import logo from "../Assets/Logo.png";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";
const AddOrg = () => {
    const [formData, setFormData] = React.useState({
      org_name: "",
      ad_email: "",
      location: "",
      contact_number: "",
      paid_leave_limit: "",
      encashed_leave_limit: "",
      });
      
      const [items, setItems] = useState([{
        org_name: "",
      ad_email: "",
      location: "",
      contact_number: "",
      paid_leave_limit: "",
      encashed_leave_limit: "",
      }]);
      React.useEffect(() => {
        fetch("http://localhost:3000/erpdatabase/hr/addOrganisation")
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
      
      
      function addor(event) {
        fetch("http://localhost:3000/erpdatabase/hr/addOrganisation", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then(data => console.log("add " + data))
        .catch(err => console.log("error " + err))
      
        console.log("Add organization")
      
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
            <label htmlFor="Grade_Name">organization Name : </label>
            <input
              type="text"
              placeholder="org_name"
              name="org_name"
              onChange={fieldChangeHandler}
                value={formData.org_name}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Bonus">Email : </label>
            <input
              type="text"
              placeholder="ad_email"
              name="ad_email"
              onChange={fieldChangeHandler}
                value={formData.ad_email}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Travel_Allowance">location : </label>
            <input
              type="text"
              placeholder="location"
              name="location"
              onChange={fieldChangeHandler}
                value={formData.location}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Dearness_Allowance">Contact number : </label>
            <input
              type="number"
              placeholder="contact_number"
              name="contact_number"
              onChange={fieldChangeHandler}
                value={formData.contact_number}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Basic_Pay">paid_leave_limit : </label>
            <input
              type="date"
              placeholder="paid_leave_limit"
              name="paid_leave_limit"
              onChange={fieldChangeHandler}
                value={formData.paid_leave_limit}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Grade_PF">encashed_leave_limit : </label>
            <input
              type="date"
              placeholder="encashed_leave_limit"
              name="encashed_leave_limit"
              onChange={fieldChangeHandler}
                value={formData.encashed_leave_limit}
            />
          </div>
          <button onClick={addor}>add Organization</button>
        </form>
      </div>
    </div>
  )
}

export default AddOrg
