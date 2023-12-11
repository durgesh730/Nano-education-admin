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
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import jsPDF from 'jspdf';


function createData(name, email, fat, carbs, protein) {
  return { name, email, fat, carbs, protein };
}


export default function DenseTable() {
  const [user, setUser] = useState([]);

  // console.log(user, )

  const rows = user.map((item) => {
    return createData(item.fname, item.email, 6.0, 24)
  })

  const handleDownload = (userData) => {
    // Create a new PDF document
    const doc = new jsPDF();

    // Define content structure
    const content = `
       User:
       Name: ${userData.name}
       Email: ${userData.email}
       `;

    // Add content to the PDF
    doc.text(content, 10, 10);

    // Save the PDF
    doc.save(`${userData.name}.pdf`);
  };

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
        <TableContainer component={Paper}
          sx={{ margin: "auto", marginTop: '1rem', width: '96%', padding: "10px" }}
        >
          <Table
            size="medium"
            aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>S.No</TableCell>
                <TableCell >Name</TableCell>
                <TableCell >Email</TableCell>
                <TableCell>Actions</TableCell>
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
                  <TableCell >{row.name}</TableCell>
                  <TableCell >{row.email}</TableCell>
                  <TableCell>
                    <DeleteOutlineIcon sx={{ paddingRight: "1rem", cursor: "pointer" }} />
                    <EditIcon sx={{ paddingRight: "1rem", cursor: "pointer" }} />
                    <ArrowCircleDownOutlinedIcon onClick={() => handleDownload(row)} sx={{ cursor: "pointer" }} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
}