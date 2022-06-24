import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datesdatatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const AttendanceDatatable = ({title}) => {

  let dateObj = new Date()

  
  let tempYear = dateObj.getFullYear()
  let tempMonth = dateObj.getMonth()+1 
  
  let tempDate = tempMonth > 9? "-" + tempMonth: "-" + 0 + tempMonth
  
  console.log(tempYear + tempDate)
  
  const [theDate, setTheDate] = useState(tempYear + tempDate)

  function dateChange(event){
    let target = event.target
    let { value } = target

    console.log(value)

    setTheDate(value)
}

  const [data, setData] = useState([
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
    fetch("http://localhost:5000/erpdatabase/income")
            .then(res => res.json())
                .then(data => {
                    setData(data);
                })
            .catch(error => console.log(error))
  }, [])

  const handleDelete = (id) => {

    // delete from the db
    // console.log(id)
    fetch(`http://localhost:5000/erpdatabase/income/delete/${id}`, {
            method: "DELETE",
        }).then(res => res.json())
            .then(data => console.log("add " + data))
        .catch(err => console.log("error " + err))

    // delete from the ui
    setData(data.filter((item) => item.id !== id));
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
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
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
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  );
};

export default AttendanceDatatable;
