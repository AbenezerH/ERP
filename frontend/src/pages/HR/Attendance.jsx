import "./Hr.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import AttendanceDatatable from "../../components/datatable/attendanceDatatable"

const Attendance = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <AttendanceDatatable title={"Attendance"}/>
      </div>
    </div>
  )
}

export default Attendance
