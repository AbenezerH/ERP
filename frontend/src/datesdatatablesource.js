const url = "https://media.istockphoto.com/vectors/person-gray-photo-placeholder-man-vector-id1201514204?k=20&m=1201514204&s=612x612&w=0&h=5404qm1GUfoty4aStYBUFAiCCHwxMy5y3z6cFuV-Qnw="

let header = []

for(let i = 1; i <= 31; i++){
    header.push(
        {
            field: i.toString(),
            headerName: i.toString(),
            width: 15,
        })
}


const user = [
  {
    field: "name",
    headerName: "Full Name",
    width: 250,
    renderCell: (params) => {
        //console.log(params.row.status + " " + params.row.name)
        // console.log(params.row)
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={url} alt="" />
          {params.row.name}
        </div>
      );
    },
  },
];

export let userColumns = []
userColumns = user.concat(header)



