import "./color.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import WarrantyDatatable from "../../components/datatable/WarrantyDatatable"

const Warranty = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <WarrantyDatatable title={"Warranty"}/>
      </div>
    </div>
  )
}

export default Warranty