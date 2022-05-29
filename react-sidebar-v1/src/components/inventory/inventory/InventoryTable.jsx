import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';



const columns = [
  { 
    id: 'id', 
    label: 'ID', 
    minWidth: 17 
  },

  { 
    id: 'product_name', 
    label: 'Product\u00a0Name', 
    minWidth: 100 
  },

  { id: 'product_description', 
    label: 'Description', 
    minWidth: 100 
  },

  {
    id: 'product_unit',
    label: 'Unit',
    minWidth: 20,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },

  {
    id: 'product_quantity',
    label: 'Quantity',
    minWidth: 20,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },


  {
    id: 'unit_cost',
    label: 'Unit\u00a0Cost',
    minWidth: 30,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },


  {
    id: 'price',
    label: 'Price',
    minWidth: 30,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },


  {
    id: 'least_critical_amount',
    label: 'LC\u00a0Amount',
    minWidth: 20,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },

  {
    id: 'high_amount',
    label: 'High\u00a0Amount',
    minWidth: 20,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },

  {
    id: 'created_at',
    label: 'Created\u00a0At',
    minWidth: 50,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },

  {
    id: 'updated_at',
    label: 'Updated\u00a0At',
    minWidth: 50,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },

  {
    id: 'expire_date',
    label: 'Expire\u00a0Date',
    minWidth: 50,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },

  {
    id: 'category',
    label: 'Category',
    minWidth: 20,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },

  {
    id: 'brand',
    label: 'Brand',
    minWidth: 20,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },

  {
    id: 'by',
    label: 'Added\u00a0By',
    minWidth: 30,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },

];


export default function StickyHeadTable(props) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [rows, setRows] = React.useState(props.items);

    React.useEffect(() => {
        setRows(props.items)
    }, [props.items])
    

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
