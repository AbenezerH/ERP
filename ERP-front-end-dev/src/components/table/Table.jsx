import React from "react"
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {

  const [rows, setRows] = React.useState([
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
      category: "1",
      brand: "1",
      by: ""
    }
  ])

  React.useEffect(() => {
    fetch("http://localhost:3000/erpdatabase/inventory")
            .then(res => res.json())
                .then(data => {
                    setRows(data);
                })
            .catch(error => console.log(error))
  })
  
  /* const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "dagim feldu",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "eyob aguchewe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "aberhame adamu",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "solomone bogale",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "seyefu fantahune",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ]; */
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  {/* <img src={row.} alt="" className="image" /> */}
                  {row.product_name}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.product_description}</TableCell>
              <TableCell className="tableCell">{row.expire_date}</TableCell>
              <TableCell className="tableCell">{row.unit_cost}</TableCell>
              <TableCell className="tableCell">{row.product_unit}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.brand}`}>{row.brand}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
