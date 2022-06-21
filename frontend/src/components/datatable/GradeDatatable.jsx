import "./HrDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../Gradedatasource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const GradeDatatable = ({title}) => {

  const [data, setData] = useState([
    {
      id:"",
        grade_id: "",
        grade_name: "", 
        basic_pay: "", 
        grade_pf: "", 
        grade_bonus: "", 
        grade_ta: "",
        grade_da: "",
    }
  ]);

  useEffect(() => {
    fetch("http://localhost:5000/erpdatabase/grade")
            .then(res => res.json())
                .then(data => {
                    setData(prevData => {
                      return data.map(each => ({
                        ...each,
                        id: each.grade_id
                      }))
                    });
                })
            .catch(error => console.log(error))
  }, [])

  const handleDelete = (id) => {

    // delete from the db
    // console.log(ep_email)
    fetch(`http://localhost:5000/erpdatabase/grade/delete/${id}`, {
            method: "DELETE",
        }).then(res => res.json())
            .then(data => console.log("add " + data))
        .catch(err => console.log("error " + err))
    
    // delete from ui
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
        <Link to="/grade/addgrade" className="link">
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

export default GradeDatatable;
