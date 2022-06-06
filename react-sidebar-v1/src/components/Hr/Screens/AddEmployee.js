import React, { useState } from "react";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";

const AddEmployee = () => {
  const [departmentsList, setDeplist] = useState([]);
  const [gradesList, setGradeslist] = useState([]);
  
    const [formData, setFormData] = useState({
      name: "",
      dob: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      ep_email: "",
      password: "",
      dept_id: "",
      grade_id: "",
      doj: "",
      paid_leave_taken: "",
      encashed_leave_this_month: "",
      encashed_leave_till_date: "", 
      });
      
  const [items, setItems] = useState([{
    name: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    ep_email: "",
    password: "",
    dept_id: "",
    grade_id: "",
    doj: "",
    paid_leave_taken: "",
    encashed_leave_this_month: "",
    encashed_leave_till_date: "", 
      }]);
      React.useEffect(() => {
        fetch("http://localhost:3000/erpdatabase/hr/addEmployee")
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
        fetch("http://localhost:3000/erpdatabase/hr/addEmployee", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then(data => console.log("add " + data))
        .catch(err => console.log("error " + err))
      
        console.log("Add employee")
      
      }
      React.useEffect(() => {
        getDepartments();
        getGrades();
      }, []);
      const getDepartments = () => {
        fetch(`http://localhost:3000/erpdatabase/hr/getDepartments`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((res) => {
            setDeplist(res);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      const getGrades = () => {
        fetch(`http://localhost:3000/erpdatabase/hr/getGrades`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((res) => {
            setGradeslist(res);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      const departments = departmentsList.map((dept) => {
        return <option value={dept.dept_id}>{dept.dept_name}</option>;
      });
      const grades = gradesList.map((grade) => {
        return <option value={grade.grade_id}>{grade.grade_name}</option>;
      });
  
  return (
    <>
      <div className="App">
        <form className="form">
          <div className="grouping">
            <h3>Basic Details</h3>
            <hr className="Underline" />
            <div className="form-control">
              <label htmlFor="name">Name : </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={fieldChangeHandler}
                value={formData.name}
                required
              />
            </div>

            <div className="form-control">
              <label htmlFor="dob">Dob : </label>
              <input
                type="date"
                id="dob"
                name="dob"
                onChange={fieldChangeHandler}
                value={formData.dob}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="address">Address : </label>
              <input
                type="text"
                id="address"
                name="address"
                onChange={fieldChangeHandler}
                value={formData.address}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="city">City : </label>
              <input
                type="text"
                id="city"
                name="city"
                onChange={fieldChangeHandler}
                value={formData.city}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="state">State : </label>
              <input
                type="text"
                id="state"
                name="state"
                onChange={fieldChangeHandler}
                value={formData.state}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="pincode" className="pincode">
                Pin-Code :{" "}
              </label>
              <input
                type="number"
                id="pincode"
                name="pincode"
                onChange={fieldChangeHandler}
                value={formData.pincode}
                size="6"
                maxLength="6"
              />
            </div>
          </div>

          <div className="grouping">
            <h3>Company Details</h3>
            <hr className="Underline" />
            <div className="form-control">
              <label htmlFor="org_name">Email : </label>
              <input
                type="email"
                id="ep_email"
                name="ep_email"
                onChange={fieldChangeHandler}
                value={formData.ep_email}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="org_name">password : </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={fieldChangeHandler}
                value={formData.password}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="Dept">Department: </label>
              <select
                style={styles.dropDown}
                onChange={fieldChangeHandler}
                value={formData.dept_id}
              >
                {departments}
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="grade_id">Grade-ID : </label>
              <select
                style={styles.dropDown}
                onChange={fieldChangeHandler}
                value={formData.name}
                required
              >
                {grades}
              </select>
              <input
                type="text"
                placeholder="department"
                name="dept_id"
                onChange={fieldChangeHandler}
                value={formData.dept_id}
              />
            </div>
            <div className="form-control">
              <label htmlFor="grade_id">Grade-ID : </label>
              <input
                type="text"
                placeholder="grade"
                name="grade_id"
                onChange={fieldChangeHandler}
                value={formData.grade_id}
              />
            </div>
            <div className="form-control">
              <label htmlFor="org_name">Org Name: </label>
              <input
                type="text"
                placeholder="org_name"
                name="org_name"
                onChange={fieldChangeHandler}
                value={formData.org_name}
              />
            </div>
            <div className="form-control">
              <label htmlFor="doj">doj : </label>
              <input
                // style={styles.input}
                type="date"
                id="doj"
                name="doj"
                onChange={fieldChangeHandler}
                value={formData.doj}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="doj">paid_leave_taken : </label>
              <input
                // style={styles.input}
                type="date"
                id="paid_leave_taken"
                name="paid_leave_taken"
                onChange={fieldChangeHandler}
                value={formData.paid_leave_taken}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="doj">encashed_leave_this_month : </label>
              <input
                // style={styles.input}
                type="date"
                id="encashed_leave_this_month"
                name="encashed_leave_this_month"
                onChange={fieldChangeHandler}
                value={formData.encashed_leave_this_month}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="doj">encashed_leave_till_date : </label>
              <input
                // style={styles.input}
                type="date"
                id="encashed_leave_till_date"
                name="encashed_leave_till_date"
                onChange={fieldChangeHandler}
                value={formData.encashed_leave_till_date}
                required
              />
            </div>
          </div>
          <button onClick={addor}>

            Add
          </button>
        </form>
      </div>
    </>
  );
};
const styles = {
  input: {
    width: window.innerWidth / 4.5,
    height: "70%",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "black",
    marginTop: "1%",
  },
  dropDown: {
    width: window.innerWidth / 4.4,
    height: window.innerHeight / 25,
    backgroundColor: "hsl(212deg 33% 89%)",
    borderWidth: 0,
    borderColor: "black",
    borderRadius: 5,
    marginTop: "1%",
  },
};
export default AddEmployee;
