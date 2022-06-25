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
                <div className="formInput">
                  <label>Department</label>
                      <select value={formData.dept_name}  onChange={fieldChangeHandler}>
                          
                        <option value={formData.dept_id}>{formData.dept_name}</option>
                      </select>
                </div>
              
              <button onClick={addemp}>Go</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hrnew;
