import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
const UpdateSales = ({ inputs, title }) => {
    const [file, setFile] = useState("");
    const [formData, setFormData] = useState({
        id: "",
        product_id: "",
        number_of_items	: "",
        selling_price: "",
        warranty: "",
        vat: "",
        witholding_tax: "",
        created_at: "",
        sold_by: "",
      });

/*       const [data, setData] = useState([
        {
          id: "", 
          img: " ",
          product_id: "", 
          number_of_items: "", 
          selling_price: "", 
          warranty: " ", 
          vat: "", 
          witholding_tax: "", 
          created_at: "",
          sold_by: ""
        },
      ]); */

      let identifier = window.location.pathname.slice(14)
    
      useEffect(() => {
        fetch(`http://localhost:5000/erpdatabase/sales/${identifier}`)
          .then((res) => res.json())
          .then((data) => {
            setFormData(() => ({...data[0], created_at: data[0].created_at.slice(0,10)}));
          })
          .catch((error) => console.log(error));
      }, []);

      
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
      
      
      function update(event) {
        fetch(`http://localhost:5000/erpdatabase/sales/update/${identifier}`, {
            method: "PUT",
            body: JSON.stringify(formData),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then(data => console.log("update " + data))
        .catch(err => console.log("error " + err))
      
        console.log("Update sales")
      
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
        <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
            <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
            {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input 
                    type={input.type} 
                    placeholder={input.placeholder} 
                    value={formData[input.name]}
                    name={input.name}
                    onChange={fieldChangeHandler}
                    required/>
                    
                </div>
              ))}
              
              <button onClick={update}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateSales;
