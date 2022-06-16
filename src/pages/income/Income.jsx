import "./income.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import IncomeDatatable from "../../components/datatable/IncomeDatatable"

const Income = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <IncomeDatatable title={"Income"}/>
      </div>
    </div>
  )
}

export default Income