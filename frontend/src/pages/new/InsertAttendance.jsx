import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../attendancedatatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function InsertAttendance({ inputs, title }){

    let tempDate = new Date().toISOString().substr(0,10)
    let arr = tempDate.split('/')
    const [theDate, setTheDate] = useState(arr.reduce((tot, e) => tot.concat(e), ""))

    function dateChange(event){
        let target = event.target
        let { value } = target

        setTheDate(value)
    }


      const [attend, setAttend] = useState([
        {
            id: "",
            date: "",
            name: "",
            emp_id: "",
            ep_email: "",
            present: "",
            time_start: "",
            time_end: "",
        }
      ])
      
      useEffect(() => {
/*         fetch("http://localhost:5000/erpdatabase/hr/allemployee")
                .then(res => res.json())
                    .then(data => {
                        setData(prevData => {
                          return data.map(each => ({
                            ...each,
                            id: each.ep_email
                          }))
                        });
                    })
                .catch(error => console.log(error)) */
        
        
        fetch(`http://localhost:5000/erpdatabase/attendance/right/${theDate}`)
                .then(res => res.json())
                    .then(data => {
                        setAttend(prevAttend => {
                          return data.map(each => ({
                            ...each,
                            status: each.present === 1 ? "Present": "Absent",
                            id: each.ep_email
                          }))
                        });
                    })
                .catch(error => console.log(error))
      }, [theDate])

      //console.log(attend + "\n" + theDate)
    

      const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="cellAction">
                <Link to={`/attendance/${params.row.ep_email}`} style={{ textDecoration: "none" }}>
                  <div className="viewButton">View</div>
                </Link>
              </div>
            );
          },
        },
      ];
      return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="datatable">
                    <div className="datatableTitle">
                        {title}
                    </div>
                    <div className="datatableTitle">
                        <input type="date" name="date" value={theDate} onChange={dateChange}></input>
                    </div>
                    <DataGrid
                        className="datagrid"
                        rows={attend}
                        columns={userColumns.concat(actionColumn)}
                        pageSize={100}
                        rowsPerPageOptions={[100]}
                        checkboxSelection
                    />
                </div>
            </div>
        </div>
      );
};
