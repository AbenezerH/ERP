import "./sales.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import SalesDatatable from "../../components/datatable/SalesDatatable";

const Sales = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <SalesDatatable title={"Sales"} />
      </div>
    </div>
  );
};

export default Sales;
