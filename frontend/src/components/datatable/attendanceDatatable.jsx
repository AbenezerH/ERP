import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datesdatatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const AttendanceDatatable = ({title}) => {

  const [days, setDays] = useState(31)
  let allEmployee = []

  let dateObj = new Date()

  
  let tempYear = dateObj.getFullYear()
  let tempMonth = dateObj.getMonth()+1 
  
  let tempDate = tempMonth > 9? "-" + tempMonth: "-" + 0 + tempMonth
  
  const [theDate, setTheDate] = useState(tempYear + tempDate)

  function dateChange(event){
    let target = event.target
    let { value } = target

    // console.log(value)

    setTheDate(value)
  }

  const [attData, setAttData] = useState([
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
  ]);

  useEffect(() => {
    let m = theDate.slice(5)
    let y = theDate.slice(0,4)
    if(m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12){
      setDays(31)
    }
    else if(m == 4 || m == 6 || m == 9 || m == 11){
     setDays(30)
    }
    else if(m == 2){
      y%4 === 0? setDays(28): setDays(29)
    }


  }, [theDate])

  function getAllIndexes(arr, val) {
    var indexes = [], i;

    for(i = 0; i < arr.length; i++){

      // console.log(arr[i].date.slice(8,10))
        if (arr[i].ep_email === val){

          indexes.push({
            ...arr[i],
            id: arr[i].ep_email,
            [Number(arr[i].date.slice(8,10)) + 1]: Number(arr[i].date.slice(8,10)) + 1
          });

          // indexes.push()
        }
    }

    // console.log(indexes)
    return indexes;
}
  
  useEffect(() => {
    let min = theDate + "-" + "01"
    let max = theDate + "-" + days

    fetch(`http://localhost:5000/erpdatabase/attendance/right/${min}/${max}`)
            .then(res => res.json())
                .then(data => {
                  setAttData(prev => {
                    return data.map(each => ({
                      ...each,
                      id: each.date + " " + each.ep_email,
                      status: each.present === 1 ? "Present": "Absent",
                    }))
                  });

                  
                  allEmployee = data.map(each => each.ep_email).filter((item, i, arr) => arr.indexOf(item) === i)

                  setAttData(prev => {
                    // console.log(allEmployee.map(each => getAllIndexes(prev, each)))
                    return (allEmployee.map(each => getAllIndexes(prev, each)))

                    // console.log(allEmployee)
                  })

                  setAttData((prev) => {
                    return prev.map(each => {
                
                      // console.log(each)
                      let keys = Object.keys(each)
                      let temp
                      
                      for(let i = 0; i < keys.length; i++){
                        temp = {...temp, ...each[keys[i]]}
                      }
                      
                      // console.log(temp)
                      return temp
                  
                      //console.log(each)
                    })
                  })

                  //console.log(attData)

                })
            .catch(error => console.log(error))
  }, [theDate])

  


  const handleDelete = (id) => {

    // delete from the db
    // console.log(id)
    fetch(`http://localhost:5000/erpdatabase/attendance/delete/${id}`, {
            method: "DELETE",
        }).then(res => res.json())
            .then(data => console.log("add " + data))
        .catch(err => console.log("error " + err))

    // delete from the ui
    setAttData(attData.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New {title}
        <Link to="/attendance/insertattendance" className="link">
          Add New
        </Link>
      </div>
      <div className="datatableTitle">
          <input type="month" name="date" value={theDate} onChange={dateChange}></input>
      </div>
      <DataGrid
        className="datagrid"
        rows={attData}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default AttendanceDatatable;
