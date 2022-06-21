const url = "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
export const userColumns = [
  { field: "id", headerName: "ID", width: 60 },
  {
    field: "product_name",
    headerName: "Product Name",
    width: 160,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={url} alt="" />
          {params.row.product_name}
        </div>
      );
    },
  },
  {
    field: "product_description",
    headerName: "Product Description",
    width: 230,
  },

  {
    field: "product_unit",
    headerName: "Measure",
    width: 80,
  },

  {
    field: "product_quantity",
    headerName: "Quantity",
    width: 80,
  },

  {
    field: "unit_cost",
    headerName: "Cost",
    width: 100,
  },

  {
    field: "least_critical_amount",
    headerName: "Least Critical",
    width: 100,
  },
  {
    field: "high_amount",
    headerName: "High Amount",
    width: 100,
  },
  {
    field: "created_at",
    headerName: "Creation Date",
    width: 120,
  },
  {
    field: "updated_at",
    headerName: "Update Date",
    width: 120,
  },
  {
    field: "expire_date",
    headerName: "Expire Date",
    width: 120,
  },
  {
    field: "category",
    headerName: "Category",
    width: 100,
  },
  {
    field: "brand",
    headerName: "Brand",
    width: 100,
  },
  {
    field: "by",
    headerName: "Added by",
    width: 100,
  },
  
];
