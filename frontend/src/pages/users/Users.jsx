import "./users.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import UsersDatatable from "../../components/datatable/UsersDatatable"

const Users = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <UsersDatatable title={"Users"}/>
      </div>
    </div>
  )
}

export default Users