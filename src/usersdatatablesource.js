const url = "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
export const userColumns = [
  { field: "admin_id", headerName: "ID", width: 160 },
  {
    field: "username",
    headerName: "User Name",
    width: 220,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={url} alt="" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "ad_email",
    headerName: "User Email",
    width: 230,
  },

  {
    field: "password",
    headerName: "Password",
    width: 180,
  },


];
