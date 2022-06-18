import "./damagedgood.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DamagedGoodDatatable from "../../components/datatable/DamagedGoodDatatable"

const DamagedGood = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DamagedGoodDatatable title={"Damaged Goods"}/>
      </div>
    </div>
  )
}

export default DamagedGood