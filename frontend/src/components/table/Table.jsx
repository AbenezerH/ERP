import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";

const img = "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg"

const List = (params) => {
	let arr = [];
	let rows = [];

	const [expData, setExpData] = useState([
		{
			id: "",
			name: "",
			created_at: "",
			ex_type: "",
			ex_amount: ""
		},
	]);

	const [incomeData, setIncomeData] = useState([
		{
			id: "",
			type: "",
			quantity: "",
			created_at: "",
			registered_by: ""
		}
	]);

	useEffect(() => {
		fetch("http://localhost:5000/erpdatabase/expense")
			.then((res) => res.json())
			.then((data) => {
				setExpData(data);
			})
			.catch((error) => console.log(error));


		fetch("http://localhost:5000/erpdatabase/income")
		.then(res => res.json())
				.then(data => {
						setIncomeData(data);
				})
		.catch(error => console.log(error))

/* 		params.setSales(() => {
			let sum = 0;
			expData.map(ex => {return sum += ex.ex_amount})
			return sum
		}) */

		// console.log(params.setSales)
		
	}, []);


	expData.map(edata => {
		arr.push({
			table: "expense",
			id: edata.id,
			date: edata.created_at
		})
		return
	})

	incomeData.map(idata => {
		arr.push({
			table: "income",
			id: idata.id,
			date: idata.created_at
		})
		return
	})

	arr.sort((a, b) => b.created_at - a.created_at)

	//console.log(arr)


	// after sorting transactions where recent is closest
	// add them in order
/* 	arr.map(val => {
		val.table === "income" ? 
			rows.push()

	}) */


	expData.map(exdata => (
		rows.push({
			id: "Expense - ".concat(exdata.id),
			type: exdata.ex_type,
			amount: exdata.ex_amount,
			created_at: exdata.created_at,
			added_by: exdata.name
		})
	))

	incomeData.map(indata => (
		rows.push({
			id: "Income - ".concat(indata.id),
			type: indata.type,
			amount: indata.quantity,
			created_at: indata.created_at,
			added_by: indata.registered_by
		})
	))


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
						<TableCell className="tableCell">Type</TableCell>
						<TableCell className="tableCell">Transaction Date</TableCell>
						<TableCell className="tableCell">Amount</TableCell>
						<TableCell className="tableCell">Registered By</TableCell>
						<TableCell className="tableCell">Status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.id}>
							<TableCell className="tableCell">{row.id}</TableCell>
							<TableCell className="tableCell">
								<div className="cellWrapper">
									<img src={img} alt="" className="image" />
									{row.type}
								</div>
							</TableCell>
							<TableCell className="tableCell">{row.created_at}</TableCell>
							<TableCell className="tableCell">{row.amount}</TableCell>
							<TableCell className="tableCell">{row.added_by}</TableCell>
							<TableCell className="tableCell">
								<span className={`status ${row.status}`}>{row.status}</span>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default List;
