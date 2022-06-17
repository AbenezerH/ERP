const url = "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
export const userColumns = [
  { field: "id", headerName: "ID", width: 60 },
  {
    field: "full_name",
    headerName: "Full Name",
    width: 220,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={url} alt="" />
          {params.row.full_name}
        </div>
      );
    },
  },
  {
    field: "phone_number",
    headerName: "Phone Number",
    width: 230,
  },

  {
    field: "serial_number",
    headerName: "Serial Number",
    width: 180,
  },

  {
    field: "valid_until",
    headerName: "Valid Until",
    width: 250,
  },


];
