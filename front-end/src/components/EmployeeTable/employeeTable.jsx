import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from '@mui/material';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import StatisticsCard from '../StatisticsCard/statisticsCard';
import StatisticsLargeCard from '../StatisticsLargeCard/statisticsLargeCard';
import {
    Content,
    RowsComponent
} from './employeeTableStyles.jsx';
import StatisticsCardPopup from '../StatisticsCardPopup/statisticsCardPopup';
import StatisticsLargeCardPopup from '../StatisticsLargeCardPopup/statisticsLargeCardPopup';

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
    const initial_data=[
        {
          "id": "stylus",
          "label": "stylus",
          "value": 211,
          "color": "hsl(4, 70%, 50%)"
        },
        {
          "id": "javascript",
          "label": "javascript",
          "value": 343,
          "color": "hsl(356, 70%, 50%)"
        },
        {
          "id": "erlang",
          "label": "erlang",
          "value": 93,
          "color": "hsl(84, 70%, 50%)"
        },
        {
          "id": "hack",
          "label": "hack",
          "value": 378,
          "color": "hsl(68, 70%, 50%)"
        },
        {
          "id": "css",
          "label": "css",
          "value": 509,
          "color": "hsl(8, 70%, 50%)"
        }
      ]
      var init_data = [
        {
          "country": "Breaks",
          "hot dog": 135
        },
        {
          "country": "Work Tasks",
          "hot dog": 162
        },
        {
          "country": "Meetings",
          "hot dog": 51
        }
      ]
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
                <Popup trigger={<h3 style={{cursor : 'pointer'}}> {row.name} </h3>} modal>
                    <Content>
                        <RowsComponent>
                            {
                            <div style={{marginRight: '5px'}}>
                                <StatisticsCardPopup head="Current Date Analysis" data={initial_data}/>
                            </div>
                            }
                            {
                            <div style={{marginLeft: '5px'}}>
                                <StatisticsCardPopup head="Previous Date Analysis" data={initial_data}/>
                            </div>
                            }
                        </RowsComponent>
                        <RowsComponent>
                            {
                            <div style={{marginTop: '15px'}}>
                                <StatisticsLargeCardPopup head="Weekly Data Analysis" data={init_data}/>
                            </div>
                            }
                        </RowsComponent>
                    </Content>
                </Popup>
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