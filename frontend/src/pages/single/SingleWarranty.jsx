import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useState, useEffect } from "react";

const SingleWarranty = ({title}) => {

  const [data, setData] = useState([
    {
      id: "",
      full_name: "",
      phone_number: "",
      serial_number: "",
      valid_until: ""
    }
  ]);
  

  useEffect(() => {
    let identifier = window.location.pathname.slice(10)
    fetch(`http://localhost:5000/erpdatabase/warranty/${identifier}`)
            .then(res => res.json())
                .then(data => {
                    setData(data);
                    console.log("data " + JSON.stringify(data))
                })
            .catch(error => console.log(error))
  }, [])

  // console.log(data)

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">{title} Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{data[0].full_name}</h1>
                <div className="detailItem">
                  <span className="itemKey">ID:</span>
                  <span className="itemValue">{data[0].id}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone Number:</span>
                  <span className="itemValue">{data[0].phone_number}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Product Serial Number:</span>
                  <span className="itemValue">{data[0].serial_number}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Warranty Valid Until:</span>
                  <span className="itemValue">{data[0].valid_until}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleWarranty;
