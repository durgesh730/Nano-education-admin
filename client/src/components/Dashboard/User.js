import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { Users } from '../api';

function createData(name, email, fat, carbs, protein) {
  return { name, email, fat, carbs, protein };
}


export default function DenseTable() {
  const [user, setUser] = useState([]);

  // console.log(user, )

  const rows = user.map((item) => {
    return createData(item.fname, item.email, 6.0, 24)
  })

  useEffect(() => {
    Users()
      .then((res) => {
        setUser(res?.data.result)
      }).catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <Grid sx={{ paddingTop: '6rem' }} >
        <Grid sx={{ paddingLeft: "2rem" }} >
          <Typography sx={{ fontSize: "1.5rem", fontWeight: "600" }}>Users</Typography>
        </Grid>
        <TableContainer component={Paper} sx={{ margin: "auto", marginTop: '1rem', width: '96%', padding:"10px" }}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>S.No</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, indx) => (
                <TableRow
                  key={indx}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {indx + 1}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
}