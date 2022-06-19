const url = "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
export const userColumns = [
  { field: "id", headerName: "ID", width: 60 },
  {
    field: "product_id",
    headerName: "Product",
    width: 160,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={url} alt="" />
          {params.row.product_id}
        </div>
      );
    },
  },

  {
    field: "quantity",
    headerName: "Quantity",
    width: 80,
  },

  
];
