import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name,
  mailID,
  contactNumber,
  department,
  joiningDate,
  password
) {
  return { name, mailID, contactNumber,department, joiningDate, password };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 7.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 7.0),
  createData('Eclair', 262, 16.0, 24, 6.0, 7.0),
  createData('Cupcake', 305, 3.7, 67, 4.3, 7.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 7.0),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Mail ID</StyledTableCell>
            <StyledTableCell align="right">Contact No.&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Dept.&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Joining Date&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Password&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.mailID}</StyledTableCell>
              <StyledTableCell align="right">{row.contactNumber}</StyledTableCell>
              <StyledTableCell align="right">{row.department}</StyledTableCell>
              <StyledTableCell align="right">{row.joiningDate}</StyledTableCell>
              <StyledTableCell align="right">{row.password}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}