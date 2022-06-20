import "./HrDatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../Payroldatatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Payroldatatable = ({title}) => {

  const [data, setData] = useState([
    {
      id: "",
      transaction_id: "",
      month: "",
      year: "",
      basic_pay: "",
      income_tax: "",
      ep_email: "",
      ad_email: "",
    }
  ]);
  
  useEffect(() => {
    fetch("http://localhost:5000/erpdatabase/payroll")
            .then(res => res.json())
                .then(data => {
                    setData(prevData => {
                      return data.map(each => ({
                        ...each,
                        id: each.transaction_id
                      }))
                    });
                })
            .catch(error => console.log(error))
  }, [])

  const handleDelete = (transaction_id) => {

    // delete from the db
    // console.log(ep_email)
    fetch(`http://localhost:5000//erpdatabase/payrolldelete/:${transaction_id}`, {
            method: "DELETE",
        }).then(res => res.json())
            .then(data => console.log("add " + data))
        .catch(err => console.log("error " + err))
    
    // delete from ui
    setData(data.filter((item) => item.transaction_id !== transaction_id));
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

export default Payroldatatable ;
