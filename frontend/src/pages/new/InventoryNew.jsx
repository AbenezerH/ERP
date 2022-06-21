import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
const AddDep = ({ inputs, title }) => {
  
    const [formData, setFormData] = useState({
              id: "",
              product_name: "",
              product_description: "",
              product_unit: "",
              product_quantity: "",
              unit_cost: "",
              least_critical_amount: "",
              high_amount: "",
              created_at: "",
              updated_at: "",
              expire_date: "",
              category: "",
              brand: "",
              by: ""
      });

    const [catData, setCatData] = useState([
      {
        id: "",
        name: ""
      }
    ])
    const [brandData, setBrandData] = useState([
      {
        id: "",
        name: ""
      }
    ])
    const [inventoryData, setInventoryData] = useState([
      {
        id: "",
        product_name: "",
        product_description: "",
        product_unit: "",
        product_quantity: "",
        unit_cost: "",
        least_critical_amount: "",
        high_amount: "",
        created_at: "",
        updated_at: "",
        expire_date: "",
        category: "",
        brand: "",
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
        fetch("http://localhost:5000/erpdatabase/category")
          .then(res => res.json())
            .then(data => {
              setCatData(data)
            })
          .catch(err => console.log("error " + err))
        fetch("http://localhost:5000/erpdatabase/brand")
          .then(res => res.json())
            .then(data => {
              setBrandData(data)
            })
          .catch(err => console.log("error " + err))
        fetch("http://localhost:5000/erpdatabase/hr/allemployee")
          .then(res => res.json())
            .then(data => {
              setInventoryData(data)
            })
          .catch(err => console.log("error " + err))
      }, [])
      
      
      function adddep(event) {
        fetch("http://localhost:5000/erpdatabase/inventory/add", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then(data => console.log("add " + data))
        .catch(err => console.log("error " + err))
      
        console.log("Add inventory")
      
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
                        input.name === "category" ? 
                          
                          catData.map((cat) => {
                            return(<option key={cat.id} value={cat.id}>{cat.name}</option>)
                          }) : 

                          input.name === "brand" ? 
                          
                            brandData.map(brand => {
                              return(<option key={brand.id} value={brand.id}>{brand.name}</option>)
                            }) :
                          
                            inventoryData.map(inventory => {
                              return(<option key={inventory.ep_email} value={inventory.ep_email}>{inventory.name}</option>)
                            })
                          
                        }
                      </select>
                  }
                </div>
              ))}
              
              <button onClick={ adddep}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDep;
