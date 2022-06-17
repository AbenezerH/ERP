import "./expense.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ExpenceDatatable from "../../components/datatable/ExpenceDatatable";

const Expense = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <ExpenceDatatable title={"expenses"} />
      </div>
    </div>
  );
};

export default Expense;
