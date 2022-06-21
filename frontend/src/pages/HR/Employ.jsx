import "./Hr.scss"
import Hrsidebar from "../../components/sidebar/Hrsidebar"
import Navbar from "../../components/navbar/Navbar"
import HrDatatable from "../../components/datatable/HrDatatable"

const Employ = () => {
  return (
    <div className="list">
      < Hrsidebar/>
      <div className="listContainer">
        <Navbar/>
        <HrDatatable title={"Employee"}/>
      </div>
    </div>
  )
}

export default Employ
