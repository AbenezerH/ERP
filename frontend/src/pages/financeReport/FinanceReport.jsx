import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./financeReport.scss";
// import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useState } from "react";

const FinanceReport = () => {

  const [totalSales, setTotalSales] = useState(100);


  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        
        <div className="widgets">
        <div> Financial Report</div>
          {/* <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" /> */}
        </div>
        <div className="charts">
          <Featured 
            totalSales={totalSales}
            />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default FinanceReport;
