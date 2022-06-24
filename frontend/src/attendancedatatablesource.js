const url = "https://media.istockphoto.com/vectors/person-gray-photo-placeholder-man-vector-id1201514204?k=20&m=1201514204&s=612x612&w=0&h=5404qm1GUfoty4aStYBUFAiCCHwxMy5y3z6cFuV-Qnw="
export const userColumns = [
  {
    field: "name",
    headerName: "Full Name",
    width: 250,
    renderCell: (params) => {
        //console.log(params.row.status + " " + params.row.name)
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={url} alt="" />
          {params.row.name}
        </div>
      );
    },
  },
  { field: "id", headerName: "ID", width: 200 },

  {
    field: "status",
    headerName: "Attendance",
    width: 200,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
  
  
];


