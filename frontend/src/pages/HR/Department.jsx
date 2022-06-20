import "./Hr.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Departmentdatatable from "../../components/datatable/Departmentdatatable"

const Department = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Departmentdatatable title={"Department"}/>
      </div>
    </div>
  )
}

export default Department
