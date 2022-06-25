import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
const Deduction = ({ inputs, title }) => {
  
    const [formData, setFormData] = useState({
        id:"",
      grade_id: " ",
        grade_name: "", 
        basic_pay: "", 
        grade_pf: "", 
        grade_bonus: "", 
        grade_ta: "",
        grade_da: "",
      });

      
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
        fetch("http://localhost:5000/erpdatabase/hr/addGrade", {
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

      console.log(formData)
      
      
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
                  <input 
                    type={input.type} 
                    placeholder={input.placeholder} 
                    value={formData[input.type]}
                    name={input.name}
                    onChange={fieldChangeHandler}/>
                </div>
              ))}
              
              <button onClick={addgrade}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deduction;
