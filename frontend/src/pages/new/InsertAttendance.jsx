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

      function togglePresent(event, theId){
        console.log(attend.emp_id + " " + attend.present + " " + attend.date)

        if(attend.emp_id && attend.present && attend.date){
          setAttend(prev => {

            return prev.map(each => {
              if(each.ep_email == theId){
                // console.log(each.ep_email)
                return {
                  ...each, 
                  present: each.present == 1? 0: 1,
                  date: theDate,
                  emp_id: theId,
                  status: each.present == 1? "Absent": "Present"
                }
              } 
              
              else {
                return each
              }
            })
            
          })
          let theSend = []
  
          attend.map(each => {
            if(each.ep_email == theId){
              theSend.push(each)
            }
          })
  
          fetch(`http://localhost:5000/erpdatabase/attendance/update/${theDate}/${theId}`, {
                method: "PUT",
                body: JSON.stringify(theSend),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then(res => res.json())
                .then(data => console.log("update " + data))
            .catch(err => console.log("error " + err))
  
          console.log(attend)
        }

        else{
          setAttend(prev => {

            return prev.map(each => {
              if(each.ep_email == theId){
                // console.log(each.ep_email)
                return {
                  ...each, 
                  present: each.present == 1? 0: 1,
                  date: theDate,
                  emp_id: theId,
                  status: each.present == 1? "Absent": "Present"
                }
              } 
              
              else {
                return each
              }
            })
            
          })
          let theSend
  
          attend.map(each => {
            if(each.ep_email == theId){
              theSend= {
                emp_id: each.ep_email,
                date: theDate,
                present: !each.present,
                time_start: "2022-06-23T07:42:47.000Z",
                time_end: "2022-06-23T07:42:47.000Z"
              }
            }
          })
          console.log(theSend)

          fetch(`http://localhost:5000/erpdatabase/attendance/add`, {
                method: "POST",
                body: JSON.stringify(theSend),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then(res => res.json())
                .then(data => console.log("add " + data))
            .catch(err => console.log("error " + err))
  

            fetch(`http://localhost:5000/erpdatabase/attendance/update/${theDate}/${theId}`, {
                method: "PUT",
                body: JSON.stringify(theSend),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then(res => res.json())
                .then(data => console.log("update " + data))
            .catch(err => console.log("error " + err))
  
          console.log(attend)
          console.log(attend)


        }


      }
    

      const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="cellAction">
                  <div className="viewButton" onClick={(event) => togglePresent(event, params.row.ep_email)}>Change</div>
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
                    {/* {console.log(attend)} */}
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
