import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../inventorydatatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const InventoryDatatable = ({title}) => {

  
  const [data, setData] = useState([
    {
      id: "",
      product_name: "",
      product_description: "",
      product_unit: "",
      product_quantity: "",
      unit_cost: "",
      price: "",
      least_critical_amount: "",
      high_amount: "",
      created_at: "",
      updated_at: "",
      expire_date: "",
      category: "1",
      brand: "1",
      by: ""
    }
  ]);
  
  useEffect(() => {
    fetch("http://localhost:5000/erpdatabase/inventory")
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

export default InventoryDatatable;
