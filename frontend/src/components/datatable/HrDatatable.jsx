import "./HrDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../hrdatatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const HrDatatable = ({title}) => {

  const [data, setData] = useState([
    {
      id: "",
      name: "",
      phonenumber: "",
      dob: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      ep_email: "4",
      password: "",
      org_name: "",
      dept_id : "",
      grade_id : "",
      doj: ""
    }
  ]);
  
  useEffect(() => {
    fetch("http://localhost:5000/erpdatabase/hr/allemployee")
            .then(res => res.json())
                .then(data => {
                    setData(prevData => {
                      return data.map(each => ({
                        ...each,
                        id: each.ep_email
                      }))
                    });
                })
            .catch(error => console.log(error))
  }, [])

  const handleDelete = (ep_email) => {

    // delete from the db
    // console.log(ep_email)
    fetch(`http://localhost:5000/erpdatabase/hr/delete/${ep_email}`, {
            method: "DELETE",
        }).then(res => res.json())
            .then(data => console.log("add " + data))
        .catch(err => console.log("error " + err))
    
    // delete from ui
    setData(data.filter((item) => item.ep_email !== ep_email));
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
              onClick={() => handleDelete(params.row.ep_email)}
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
        <Link to="/addemployee/hrnew" className="link">
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

export default HrDatatable;
