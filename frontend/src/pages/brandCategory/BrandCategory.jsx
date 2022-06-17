import "./brandCategory.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import BrandDatatable from "../../components/datatable/BrandDatatable"

const BrandCategory = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <BrandDatatable title={"Brand"}/>
        <BrandDatatable title={"Category"}/>
      </div>
    </div>
  )
}

export default BrandCategory