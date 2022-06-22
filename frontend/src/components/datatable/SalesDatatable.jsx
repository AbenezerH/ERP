import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../salesdatatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const SalesDatatable = ({ title }) => {
  const [data, setData] = useState([
    {
      id: "", 
      img: " ",
      product_id: "", 
      number_of_items: "", 
      selling_price: "", 
      warranty: " ", 
      vat: "", 
      witholding_tax: "", 
      created_at: "",
      sold_by: ""
    },
  ]);

  useEffect(() => {
    fetch("http://localhost:5000/erpdatabase/sales")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (id) => {

    // delete from the db
    // console.log(id)
    fetch(`http://localhost:5000/erpdatabase/sales/delete/${id}`, {
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
        <Link to="/sales/add" className="link">
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

export default SalesDatatable;
