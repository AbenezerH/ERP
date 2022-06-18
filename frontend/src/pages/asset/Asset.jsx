import "./asset.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import AssetDatatable from "../../components/datatable/AssetDatatable"

const Asset = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <AssetDatatable title={"Asset"}/>
      </div>
    </div>
  )
}

export default Asset