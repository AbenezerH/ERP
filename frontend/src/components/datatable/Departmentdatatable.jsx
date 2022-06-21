import "./HrDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../Departmentdatasource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Departmentdatatable = ({title}) => {

  const [data, setData] = useState([
    {
        id: "",
        dept_id: " ",
        dept_name: "", 
        branch: "", 
    }
  ]);
  
  useEffect(() => {
    fetch("http://localhost:5000/erpdatabase/department")
            .then(res => res.json())
                .then(data => {
                    setData(prevData => {
                      return data.map(each => ({
                        ...each,
                        id: each.dept_id
                      }))
                    });
                })
            .catch(error => console.log(error))
  }, [])
  const handleDelete = (dept_id) => {

    // delete from the db
    // console.log(id)
    fetch(`http://localhost:5000/erpdatabase/department/delete/${dept_id}`, {
            method: "DELETE",
        }).then(res => res.json())
            .then(data => console.log("add " + data))
        .catch(err => console.log("error " + err))

    // delete from the ui
    setData(data.filter((item) => item.dept_id !== dept_id));
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
              onClick={() => handleDelete(params.row.dept_id)}
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
        Add Department {title}
        <Link to="/department/addDep" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Departmentdatatable ;
