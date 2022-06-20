import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../usersdatatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const UserDatatable = ({title}) => {

  
  const [data, setData] = useState([
    {
      id: "",
      companyName: "",
      TIN_number: "",
      username: "",
      ad_email: "",
      password: ""
    }
  ]);
  
  useEffect(() => {
    fetch("http://localhost:5000/erpdatabase/admin")
            .then(res => res.json())
                .then(data => {
                    setData(prevData => {
                      return data.map((each) => ({
                        ...each,
                        id: each.ad_email,                       
                      }))
                    });
                })
            .catch(error => console.log(error))
  }, [])

  const handleDelete = (ad_email) => {

    // delete from the db
    // console.log(ad_email)
    fetch(`http://localhost:5000/erpdatabase/admin/delete/${ad_email}`, {
            method: "DELETE",
        }).then(res => res.json())
            .then(data => console.log("add " + data))
        .catch(err => console.log("error " + err))
    
    // delete from ui
    setData(data.filter((item) => item.ad_email !== ad_email));
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
              onClick={() => handleDelete(params.row.ad_email)}
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

export default UserDatatable;
