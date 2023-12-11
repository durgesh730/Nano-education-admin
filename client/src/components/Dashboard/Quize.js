import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, Grid } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';

const rows = [
  {
    name: 'Mohan',
    email: 'mohan@gmail.com',
    status: 'paid',
    totalpoints: 20,
    attempts: '8',
  },
  {
    name: 'Varun',
    email: 'varun@gmail.com',
    status: 'unpaid',
    totalpoints: 30,
    attempts: '7',
  },
  {
    name: 'Durgesh',
    email: 'durgesh@gmail.com',
    status: 'paid',
    totalpoints: 20,
    attempts: '9',

  },

];

export default function Quize() {
  return (
    <Grid sx={{ paddingTop: '6rem' }} >
      <Grid sx={{ paddingLeft: "1.5rem" }} >
        <Typography sx={{ fontSize: "1.5rem", fontWeight: "600" }}>Quiz Details</Typography>
      </Grid>
      <TableContainer component={Paper} sx={{ margin: "auto", marginTop: '1rem', width: '97%' }}>
        <Table size="medium" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Sr.no.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Totalpoints</TableCell>
              <TableCell>Attempts</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.totalpoints}</TableCell>
                <TableCell>{row.attempts}</TableCell>
                <TableCell>
                  <DeleteOutlineIcon sx={{ paddingRight: '1rem', cursor: 'pointer' }} />
                  <EditIcon sx={{ paddingRight: '1rem', cursor: 'pointer' }} />
                  <ArrowCircleDownOutlinedIcon onClick={() => handleDownload(row)} sx={{ cursor: 'pointer' }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}