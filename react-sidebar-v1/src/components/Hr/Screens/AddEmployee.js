import React, { useState } from "react";
import "../StyleSheets/Welcome.css";
import "../StyleSheets/AdminOptions.css";

const AddEmployee = () => {
  const [change, setChange] = useState(true)

    const [grad_idItems, setgrad_idItems] = useState([{
      id: "",
      name: ""
    }]);

    const [dep_idItems, setdep_idItems] = useState([{
      id: "",
        name: ""
    }]);
    const [formData, setFormData] = useState({
      name: "",
      dob: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      ep_email: "",
      password: "",
      dept_id: "1",
      grade_id: "1",
      doj: "", 
      });
      React.useEffect(() => {
               fetch("http://localhost:3000/erpdatabase/hr/getGradeid")
            .then(res => res.json())
                .then(data => {
                  setgrad_idItems(data);
                })
            .catch(error => console.log(error))

        fetch("http://localhost:3000/erpdatabase/hr/getDepartmentid")
            .then(res => res.json())
                .then(data => {
                  setdep_idItems(data);
                })
            .catch(error => console.log(error))

    }, [change])


    // the object containing the regex
    let reg = {
        name: /^[a-zA-Z0-9(),\-_ ]{1,5}$/,
        dob: /.*/,
        address:  /^[a-zA-Z0-9(),\-_ ]{1,5}$/,
        city: /^[a-zA-Z0-9(),\-_ ]{1,5}$/,
        state: /^[a-zA-Z0-9(),\-_ ]{1,5}$/,
        pincode: /^[0-9()]{1,6}$/,
        ep_email:  /^[a-zA-Z0-9(),\-_ ]{1,8}$/,
        password:  /^[a-zA-Z0-9(),\-_ ]{1,6}$/,
        dept_id: /.*/,
        grade_id:/.*/,
        doj: /.*/,

    }
     
      
    function fieldChangeHandler(event){
      const target = event.target
      const {name, value} = target

      
      setFormData(prevData => {
          
          if(reg[name].test(value)){
              target.style.color = "red"
          }
          else{
              target.style.color = "black"
          }
          
          return {
              ...prevData,
              [name]: value
          } 
      })
      
  }
  function addor(event) {
    setChange(prev => !prev)
    setFormData(prevFormData => {
        let obj
        for (let key in prevFormData){
            obj = {
                ...obj, 
                [key]: ""
            }
        }
        return obj
    })

    fetch("http://localhost:3000/erpdatabase/hr/addEmployee", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(res => res.json())
        .then(data => console.log("add " + data))
    .catch(err => console.log("error " + err))

    console.log("Add employee information")

}
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
                                id="dept_id" 
                                name="dept_id"
                                value={formData.dept_id}
                                onChange={fieldChangeHandler}>
                            <option value="1">other</option>
                            {dep_idItems.map(cat_item => {
                                if(!cat_item.name === "other")
                                return(
                                    <option key={cat_item.id} value={cat_item.id}>{cat_item.name}</option>
                                )
                            })}
                        </select>
            </div>
            <div className="form-control">
              <label htmlFor="grade_id">Grade-ID : </label>
              <select 
              style={styles.dropDown}
                                id="grade_id" 
                                name="grade_id"
                                value={formData.grade_id}
                                onChange={fieldChangeHandler}>
                            <option value="1">other</option>
                            {grad_idItems.map(cat_item => {
                                if(!cat_item.name === "other")
                                return(
                                    <option key={cat_item.id} value={cat_item.id}>{cat_item.name}</option>
                                )
                            })}
                        </select>
            </div>
            <div className="form-control">
              <label htmlFor="doj">doj : </label>
              <input
                 style={styles.input}
                type="date"
                id="doj"
                name="doj"
                onChange={fieldChangeHandler}
                value={formData.doj}
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
