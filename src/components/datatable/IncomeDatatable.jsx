import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../incomedatatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const IncomeDatatable = ({title}) => {

  
  const [data, setData] = useState([
    {
      id: "",
      type: "",
      quantity: "",
      created_at: "",
      registered_by: ""
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
        <Link to="/users/new" className="link">
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

export default IncomeDatatable;
