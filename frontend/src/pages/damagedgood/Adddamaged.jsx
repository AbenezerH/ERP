import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
const Adddamaged = ({ inputs, title }) => {
  
    const [formData, setFormData] = useState({
        id: "",
      product_id: "",
      quantity: "" 
      });
      const [inventoryData, setInventoryData] = useState([
        {
          id: "",
          product_name: "",
          product_description: "",
          product_unit: "",
          product_quantity: "",
          unit_cost: "",
          price: "",
          least_critical_amount: "",
          high_amount: "",
          created_at: "",
          updated_at: "",
          expire_date: "",
          category: "1",
          brand: "1",
          by: ""
        }
      ])
      
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
      
      useEffect(()  => {
        fetch("http://localhost:5000/erpdatabase/inventory")
          .then(res => res.json())
            .then(data => {
              setInventoryData(data)
            })
          .catch(err => console.log("error " + err))
      }, [])
      
      function add(event) {
        fetch("http://localhost:5000/erpdatabase/damagedgood/add", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then(data => console.log("add " + data))
        .catch(err => console.log("error " + err))
      
        console.log("Add dameged good")
      
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
                          inventoryData.map(inventory => {
                            return(<option key={inventory.id} value={inventory.id}>{inventory.product_name}</option>)
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

export default Adddamaged;
