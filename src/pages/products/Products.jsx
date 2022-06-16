import "./products.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import InventoryDatatable from "../../components/datatable/InventoryDatatable"

const Products = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <InventoryDatatable title={"Product"}/>
      </div>
    </div>
  )
}

export default Products