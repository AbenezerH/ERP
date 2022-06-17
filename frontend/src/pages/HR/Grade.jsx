import "./Hr.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import HrDatatable from "../../components/datatable/HrDatatable"

const Hr = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <HrDatatable title={"Grade Pay"}/>
      </div>
    </div>
  )
}

export default Hr
