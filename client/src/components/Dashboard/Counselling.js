import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FaEye } from "react-icons/fa";
import { Typography, Grid } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';

const rows = [
 {
  name:'Mohan',
  email:'mohan@gmail.com',
  dob:'2-11-2001',
  neetrank:800,
 },
 {
  name:'Varun',
  email:'varun@gmail.com',
  dob:'2-11-2001',
  neetrank:899,
 },
 {
  name:'Monu',
  email:'monu@gmail.com',
  dob:'12-11-2001',
  neetrank:804,
 },
 {
  name:'Vicky',
  email:'vicky@gmail.com',
  dob:'30-11-2001',
  neetrank:801,
 },

];

export default function Counselling() {
  return (
    <Grid sx={{ paddingTop: '6rem' }} >
        <Grid sx={{ paddingLeft: "2rem" }} >
          <Typography sx={{ fontSize: "1.5rem", fontWeight: "600" }}>Counselling details</Typography>
        </Grid>
    <TableContainer component={Paper} sx={{ margin:"auto",  marginTop:'1rem', width:'96%'}}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Sr.no.</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">DOB</TableCell>
            <TableCell align="right">Neetrank</TableCell>
            <TableCell align="right">Scorecard</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.dob}</TableCell>
              <TableCell align="right">{row.neetrank}</TableCell>
              <TableCell align="right">{<FaEye />}</TableCell>
              <TableCell align="right"><DeleteOutlineIcon />
                    <EditIcon />
                    <ArrowCircleDownOutlinedIcon onClick={() => handleDownload(row)} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
  );
}