import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
const Hrnew = ({ inputs, title }) => {
    const [formData, setFormData] = useState({
        grade_id: "",
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
              {() => {
                for(let i =0; i < inputs.length; i++){
                    return(
                        <div className="formInput" key={inputs.id}>
                          <label>{inputs[i].label}</label>
                          <input type={inputs[i].type} 
                          placeholder={inputs[i].placeholder} 
                          onChange={fieldChangeHandler}
                          value={formData[i]}
                          />
                   </div>
                    );   
                }
              }}
              <button onClick={addgrade}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hrnew;
