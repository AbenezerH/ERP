import "./Hr.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import GradeDatatable from "../../components/datatable/GradeDatatable"

const Grade = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <GradeDatatable title={"Grade Pay"}/>
      </div>
    </div>
  )
}

export default Grade
