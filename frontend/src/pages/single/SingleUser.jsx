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

  let identifier = window.location.pathname.slice(7)
  useEffect(() => {
    fetch(`http://localhost:5000/erpdatabase/admin/${identifier}`)
            .then(res => res.json())
                .then(data => {
                    setData(data);
                    console.log("data " + JSON.stringify(data))
                })
            .catch(error => console.log(error))
  }, [])

  const [fdata, setFdata] = useState({
    accepted: "",
    role: "",
    ad_email: ""
  })

  useEffect(() => {
    setFdata((prev) => {

      return{
      ad_email: identifier,
      accepted: data[0].accepted,
      role: data[0].role
      }
    })
  }, [data])

  function handle(event){
    let target = event.target
    const {name, value} = target

    setFdata(prevData => {
      return {
          ...prevData,
          [name]: value
      }
    })

  }

  function change(event){
    fetch(`http://localhost:5000/erpdatabase/admin/update/${identifier}`, {
            method: "PUT",
            body: JSON.stringify(fdata),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res => res.json())
            .then(data => console.log("Admin " + data))
        .catch(err => console.log("error " + err))
      
        console.log(fdata)

        window.location.reload()
  }

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
                <h1 className="itemTitle">{identifier}</h1>
                <div className="detailItem">
                  <div className="itemKey"><label htmlFor="role">Role</label></div>
                  <div className="itemValue">
                  <select id="role" name="role" onChange={handle} value={fdata.role}>
                    <option value="0">No previlage</option>
                    <option value="1">Inventory previlage</option>
                    <option value="2">Sales previlage</option>
                    <option value="3">HR previlage</option>
                    <option value="4">Finance previlage</option>
                    <option value="5">Inventory - sales</option>
                    <option value="6">Inventory - HR</option>
                    <option value="7">Inventory - Finance</option>
                    <option value="8">HR - Finance</option>
                    <option value="9">All previlage</option>
                  </select>

                  </div>

                </div>

                <div className="itemKey"><label htmlFor="status">Status</label></div>
                <div className="itemValue">
                  <select id="status" name="accepted" onChange={handle} value={fdata.accepted}>
                    <option value="1">Accepted</option>
                    <option value="0">Not Accepted</option>
                  </select>

                </div>

                  <button type="submit" className="itemKey" onClick={change}>change</button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default SingleUser;
