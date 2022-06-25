import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";

const Hrnew = ({ inputs, title }) => {
    const [formData, setFormData] = useState({
      name: "",
      phonenumber: "",
      dob: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      ep_email: "",
      password: "",
      dept_id: "1",
      grade_id: "1",
      doj: ""
      });
    const [empData, setEmpData] = useState([{
      name: "",
      phonenumber: "",
      dob: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      ep_email: "",
      password: "",
      dept_id: "",
      grade_id: "",
      doj: ""
      }]);
      const [data, setData] = useState([
        {
          id:"",
            grade_id: "",
            grade_name: "", 
            basic_pay: "", 
            grade_pf: "", 
            grade_bonus: "", 
            grade_ta: "",
            grade_da: "",
        }
      ]);
      const [ddata, setDdata] = useState([
        {
            id: "",
            dept_id: " ",
            dept_name: "", 
            branch: "", 
        }
      ]);
      
      useEffect(() => {
        fetch("http://localhost:5000/erpdatabase/hr/allemployee")
                .then(res => res.json())
                    .then(data => {
                      setEmpData(data);
                    })
                .catch(error => console.log(error))
      }, [])

      useEffect(() => {
        fetch("http://localhost:5000/erpdatabase/department")
                .then(res => res.json())
                    .then(data => {
                      setDdata(prevData => {
                          return data.map(each => ({
                            ...each,
                            id: each.dept_id
                          }))
                        });
                    })
                .catch(error => console.log(error))
      }, [])
    
      useEffect(() => {
        fetch("http://localhost:5000/erpdatabase/grade")
                .then(res => res.json())
                    .then(data => {
                        setData(prevData => {
                          return data.map(each => ({
                            ...each,
                            id: each.grade_id
                          }))
                        });
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
      
      
      function addemp(event) {
        event.preventDefault()

        let keys = Object.keys(formData)

        if(keys.every((key) => formData[key].length !== 0)){

          if(!empData.some(emp => emp.ep_email == formData.ep_email)){
            
            
            fetch("http://localhost:5000/erpdatabase/hr/addEmployee", {
              method: "POST",
              body: JSON.stringify(formData),
              headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
            }).then(res => res.json())
                .then(data => console.log("add " + data))
            .catch(err => console.log("error " + err))
            
            console.log("Add employee")

            window.location.href = '/addemployee';
            
          }

          else{
            console.log("email must be unique")
          }
            
        }

        else{
          console.log("Empty field")
        }
      }
      
      
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
            {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  {input.type !== "select" ? 
                    <input 
                      id={input.name}
                      type={input.type}
                      placeholder={input.placeholder}
                      value={formData[input.type]}
                      name={input.name}
                      onChange={fieldChangeHandler}
                      required
                      /> : 
                      <select value={formData[input.name]} name={input.name} onChange={fieldChangeHandler}>
                        {
                        input.name === "dept_id" ? 
                          
                          ddata.map((cat) => {
                            return(<option key={cat.id} value={cat.dept_id}>{cat.dept_name}</option>)
                          }) :
                            data.map(brand => {
                              return(<option key={brand.id} value={brand.grade_id}>{brand.grade_name}</option>)
                            })
                          
                        }
                      </select>
                  }
                </div>
              ))}
              
              <button onClick={addemp}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hrnew;
