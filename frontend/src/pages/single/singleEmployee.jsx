import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";

const SingleEmployee = ({title}) => {

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
      dept_id: "",
      grade_id: "",
      doj: ""
    }
  ]);
  

  useEffect(() => {
    let identifier = window.location.pathname.slice(13)
    fetch(`http://localhost:5000/erpdatabase/hr/employee/${identifier}`)
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
                <h1 className="itemTitle">{data[0].name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Phone Number:</span>
                  <span className="itemValue">{data[0].phonenumber}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Birth Day:</span>
                  <span className="itemValue">{data[0].dob}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    {data[0].address}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">City:</span>
                  <span className="itemValue">{data[0].city}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">State:</span>
                  <span className="itemValue">{data[0].state}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Pincode:</span>
                  <span className="itemValue">{data[0].pincode}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{data[0].ep_email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Department:</span>
                  <span className="itemValue">{data[0].dept_id}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Pay Grade:</span>
                  <span className="itemValue">{data[0].grade_id}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Hire Date:</span>
                  <span className="itemValue">{data[0].doj}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default SingleEmployee;
