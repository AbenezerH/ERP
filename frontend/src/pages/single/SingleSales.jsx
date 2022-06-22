import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useState, useEffect } from "react";

const SingleSale = ({title}) => {

  const [data, setData] = useState([
    {
      id: "",
      product_id: "",
      number_of_items	: "",
      selling_price: "",
      warranty: "",
      vat: "",
      witholding_tax: "",
      created_at: "",
      sold_by: "",
    }
  ]);

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
  ]);
  

  useEffect(() => {
    let identifier = window.location.pathname.slice(7)
    fetch(`http://localhost:5000/erpdatabase/sales/${identifier}`)
            .then(res => res.json())
                .then(data => {
                    setData(data);
                    console.log("data " + JSON.stringify(data))
                })
            .catch(error => console.log(error))
        

/*     fetch(`http://localhost:5000/erpdatabase/inventory/${inventoryData.product_id}`)
    .then(res => res.json())
        .then(data => {
            setInventoryData(data);
            console.log("data " + JSON.stringify(data))
        })
    .catch(error => console.log(error)) */
  }, [])

  console.log(data)
  console.log(inventoryData)

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
                <h1 className="itemTitle">{data[0].id}</h1>
                <div className="detailItem">
                  <span className="itemKey">Product Id:</span>
                  <span className="itemValue">{data[0].product_id}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Number of Items Sold:</span>
                  <span className="itemValue">{data[0].number_of_items}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Product Selling Price:</span>
                  <span className="itemValue">{data[0].selling_price}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Warranty:</span>
                  <span className="itemValue">{data[0].warranty}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Vat:</span>
                  <span className="itemValue">{data[0].vat}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Withholding:</span>
                  <span className="itemValue">{data[0].witholding_tax}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Sale Date:</span>
                  <span className="itemValue">{data[0].created_at}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Product Sold By:</span>
                  <span className="itemValue">{data[0].sold_by}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSale;
