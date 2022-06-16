const url = "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
export const userColumns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "name",
    headerName: "Full Name",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={url} alt="" />
          {params.row.name}
        </div>
      );
    },
  },
  
  {
    field: "ep_email",
    headerName: "Email",
    width: 200,
  },
  
  {
    field: "doj",
    headerName: "Hire Date",
    width: 115,
  },

  {
    field: "dob",
    headerName: "Birth Date",
    width: 115,
  },

  {
    field: "address",
    headerName: "Street/Area",
    width: 180,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "state",
    headerName: "State",
    width: 100,
  },
  {
    field: "dept_id",
    headerName: "Department",
    width: 100,
  },
  {
    field: "org_name",
    headerName: "Organization",
    width: 100,
  },
  {
    field: "grade_id",
    headerName: "Pay Grade",
    width: 100,
  },
  {
    field: "pincode",
    headerName: "Pincode",
    width: 100,
  },
  {
    field: "password",
    headerName: "Password",
    width: 100,
  },


];
