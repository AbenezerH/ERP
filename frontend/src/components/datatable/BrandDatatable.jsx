import "./branddatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../branddatatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const BrandDatatable = ({title}) => {
  
  const [catData, setCatData] = useState([
    {
      id: "",
      name: ""
    }
  ]);
  
  const [brandData, setBrandData] = useState([
    {
      id: "",
      name: ""
    }
  ]);

  useEffect(() => {
    fetch("http://localhost:5000/erpdatabase/brand")
            .then(res => res.json())
                .then(data => {
                    setBrandData(data);
                })
            .catch(error => console.log(error))

    fetch("http://localhost:5000/erpdatabase/category")
            .then(res => res.json())
                .then(data => {
                    setCatData(data);
                })
            .catch(error => console.log(error))

  }, [])


  const handleDelete = (id, table) => {

    // delete from the db
    // console.log(id)
    fetch(`http://localhost:5000/erpdatabase/${table}/delete/${id}`, {
            method: "DELETE",
        }).then(res => res.json())
            .then(data => console.log("add " + data))
        .catch(err => console.log("error " + err))

    // delete from the ui
    table === "brand"? 
                      setBrandData(brandData.filter((item) => item.id !== id)) : 
                      setCatData(catData.filter((item) => item.id !== id))

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
              onClick={() => handleDelete(params.row.id, title === "Brand"? "brand": title === "Category"? "category": "nottable")}
              >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  if(title === "Brand"){
    return (
      <div className="branddatatable">
        <div className="branddatatableTitle">
          Add New {title}
          <Link to="/brandCategory/brand" className="link">
            Add New
          </Link>
        </div>
        <DataGrid
          className="datagrid"
          rows={brandData}
          columns={userColumns.concat(actionColumn)}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          />
      </div>
    );

  }

  else if(title === "Category"){
    return(
      <div className="branddatatable">
        <div className="branddatatableTitle">
          Add New {title}
          <Link to="/brandCategory/category" className="link">
            Add New
          </Link>
        </div>
        <DataGrid
          className="datagrid"
          rows={catData}
          columns={userColumns.concat(actionColumn)}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    );

  }
  
};

export default BrandDatatable;
