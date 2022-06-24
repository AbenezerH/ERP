import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../inventorydatatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {useAuthValue} from '../../AuthContext'


const InventoryDatatable = ({title}) => {
  const {currentUser} = useAuthValue()

  const [role, setRole]= useState(0)

  // useeffect
  useEffect(() => {
    fetch(`http://localhost:5000/erpdatabase/admin/${currentUser.email}`)
      .then(res => res.json())
        .then(data => {
          setRole(data[0].role)
        })
        .catch(err => {
          console.log(err)
        })
  }, [currentUser.email])

  
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
      category: "",
      brand: "",
      by: ""
    }
  ]);

  
  useEffect(() => {
    if(true){
      fetch("http://localhost:5000/erpdatabase/inventory")
            .then(res => res.json())
                .then(data => {
                    setData(data);
                })
            .catch(error => console.log(error))
    }
  }, [])

  const handleDelete = (id) => {

    // delete from the db
    // console.log(id)
    fetch(`http://localhost:5000/erpdatabase/inventory/delete/${id}`, {
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
            <Link to={`/products/${params.row.id}`} style={{ textDecoration: "none" }}>
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
        <Link to="/products/InventoryNew" className="link">
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
