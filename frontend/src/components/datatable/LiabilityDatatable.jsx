import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../liabilitydatatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const LiabilityDatatable = ({title}) => {

  
  const [data, setData] = useState([
    {
      id: "",
        name: "",
        created_at: "",
        type: "",
        amount: "",
    }
  ]);
  
  useEffect(() => {
    fetch("http://localhost:5000/erpdatabase/liability")
            .then(res => res.json())
                .then(data => {
                    setData(data);
                })
            .catch(error => console.log(error))
  }, [])

  const handleDelete = (id) => {

    // delete from the db
    // console.log(id)
    fetch(`http://localhost:5000/erpdatabase/liability/delete/${id}`, {
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
        Add {title}
        <Link to="/liability/add" className="link">
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

export default LiabilityDatatable;
