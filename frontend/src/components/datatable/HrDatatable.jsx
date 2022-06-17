import "./HrDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../hrdatatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const HrDatatable = ({title}) => {

  const [data, setData] = useState([
    {
      present: "",
      e_id: "",
      paid_leave_taken: "",
      encashed_leave_this_month: "",
      encashed_leave_till_date: "",
      doj: "",
      name: "",
      dob: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      id : "",
      password: "",
      org_name: "",
      dept_id : "",
      grade_id : ""
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
        <Link to="/hr/hrnew" className="link">
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
