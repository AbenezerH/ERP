import "./Hr.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import HrDatatable from "../../components/datatable/HrDatatable"

const Employ = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <HrDatatable title={"Employee"}/>
      </div>
    </div>
  )
}

export default Employ