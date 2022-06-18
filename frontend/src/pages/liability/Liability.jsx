import "./liability.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import LiabilityDatatable from "../../components/datatable/LiabilityDatatable"

const Liability = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <LiabilityDatatable title={"Liability"}/>
      </div>
    </div>
  )
}

export default Liability