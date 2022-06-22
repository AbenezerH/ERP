import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
const Addincome = ({ inputs, title }) => {
  
    const [formData, setFormData] = useState({
        type: "",
        quantity: "",
        created_at: "",
        registered_by: "",
      });

      const [data, setData] = useState([
        {
          id: "",
          name: "",
          phonenumber: "",
          dob: "",
          address: "",
          city: "",
          state: "",
          pincode: "",
          ep_email: "",
          password: "",
          dept_id : "",
          grade_id : "",
          doj: ""
        }
      ]);
      
      useEffect(() => {
        fetch("http://localhost:5000/erpdatabase/hr/allemployee")
                .then(res => res.json())
                    .then(data => {
                        setData(prevData => {
                          return data.map(each => ({
                            ...each,
                            id: each.ep_email
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
      
      
      function add(event) {
        fetch("http://localhost:5000/erpdatabase/income/add", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then(data => console.log("add " + data))
        .catch(err => console.log("error " + err))
      
        console.log("Add income")
      
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
                  {input.type !== "select" ? 
                    <input 
                      type={input.type}
                      placeholder={input.placeholder}
                      value={formData[input.type]}
                      name={input.name}
                      onChange={fieldChangeHandler}
                      required
                      /> : 
                      <select value={formData[input.name]} name={input.name} onChange={fieldChangeHandler}>
                        {                        
                          data.map(inventory => {
                            return(<option key={inventory.id} value={inventory.ep_email}>{inventory.name}</option>)
                          })
                          
                        }
                      </select>
                  }
                </div>
              ))}
              
              <button onClick={add}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addincome;
