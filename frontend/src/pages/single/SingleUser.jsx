import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useState, useEffect } from "react";

const SingleUser = ({title}) => {

  const [data, setData] = useState([
    {
      companyName: "The Company",
      TIN_number: "12345",
      username: "Jane Doe",
      ad_email: "Jane.Doe@gmail.com",
      password: "abc"
    }
  ])

  useEffect(() => {
    let identifier = window.location.pathname.slice(7)
    fetch(`http://localhost:5000/erpdatabase/admin/${identifier}`)
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
                <h1 className="itemTitle">{data[0].username}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{data[0].ad_email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">TIN Number:</span>
                  <span className="itemValue">{data[0].TIN_number}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Company Name:</span>
                  <span className="itemValue">
                    {data[0].companyName}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default SingleUser;
