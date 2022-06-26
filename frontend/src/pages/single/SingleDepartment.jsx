import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";

const SingleDepartment = ({title}) => {

  const [data, setData] = useState([
    {
      dept_id: "",
      dept_name: "",
      branch: "",
    }
  ])

  let identifier = window.location.pathname.slice(12)
  useEffect(() => {
    fetch(`http://localhost:5000/erpdatabase/department/${identifier}`)
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
                src="https://pbs.twimg.com/media/DhWgsg6UwAAGaRc.jpg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{data[0].dept_name}</h1>
                <div className="detailItem">
                  <span className="itemKey">ID:</span>
                  <span className="itemValue">{data[0].dept_id}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Branch:</span>
                  <span className="itemValue">{data[0].branch}</span>
                </div>
               
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default SingleDepartment;
