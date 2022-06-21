import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useState, useEffect } from "react";

const SingleProduct = ({title}) => {

  const [data, setData] = useState([
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
      category: "1",
      brand: "1",
      by: ""
    }
  ]);
  

  useEffect(() => {
    let identifier = window.location.pathname.slice(10)
    fetch(`http://localhost:5000/erpdatabase/inventory/${identifier}`)
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
                <h1 className="itemTitle">{data[0].product_name}</h1>
                <div className="detailItem">
                  <span className="itemKey">ID:</span>
                  <span className="itemValue">{data[0].id}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Product Description:</span>
                  <span className="itemValue">{data[0].product_description}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Measurement Unit:</span>
                  <span className="itemValue">
                    {data[0].product_unit}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Product Quantity:</span>
                  <span className="itemValue">{data[0].product_quantity}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Product Unit Cost:</span>
                  <span className="itemValue">{data[0].unit_cost}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Least Critical Amount:</span>
                  <span className="itemValue">{data[0].least_critical_amount}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">High Amount:</span>
                  <span className="itemValue">{data[0].high_amount}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Creation Date:</span>
                  <span className="itemValue">{data[0].created_at}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Last Updated:</span>
                  <span className="itemValue">{data[0].updated_at}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Product Expiration Date:</span>
                  <span className="itemValue">{data[0].expire_date}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Product Category:</span>
                  <span className="itemValue">{data[0].category}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Product Brand:</span>
                  <span className="itemValue">{data[0].brand}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Added By:</span>
                  <span className="itemValue">{data[0].by}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
