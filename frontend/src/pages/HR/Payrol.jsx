import "./Hr.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Payroldatatable from "../../components/datatable/Payroldatatable"

const Payrol = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Payroldatatable title={"payroll"}/>
      </div>
    </div>
  )
}

export default Payrol
