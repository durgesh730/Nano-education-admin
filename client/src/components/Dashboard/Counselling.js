import { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Grid,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { CounsellingData, Users } from '../api';

const Counselling = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([])

  console.log(data, user, "all data of rray")

  // Create a map for users based on their _id for easier access
  const usersMap = new Map(user.map(user => [user._id, user]));

  // Merge users' data into the data array based on matching userId and _id
  const mergedData = data.map(item => ({
    ...item,
    ...(usersMap.get(item.userId) || {}) // Merge user data if found, otherwise use an empty object
  }))


  useEffect(() => {

    Users()
      .then((res) => {
        setUser(res?.data.result)
      }).catch((err) => {
        console.log(err)
      })

    CounsellingData()
      .then((res) => {
        setData(res?.data?.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDownload = (rowData) => {
    console.log('Downloading:', rowData);
  };

  return (
    <Grid sx={{ paddingTop: '6rem' }}>
      <Grid sx={{ paddingLeft: '1.5rem' }}>
        <Typography sx={{ fontSize: '1.5rem', fontWeight: '600' }}>Counselling details</Typography>
      </Grid>
      <TableContainer component={Paper} sx={{ margin: 'auto', marginTop: '1rem', width: '97%' }}>
        <Table size="medium" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Sr.no.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>DOB</TableCell>
              <TableCell>Neetrank</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Question</TableCell>
              <TableCell>Scorecard</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mergedData?.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>{row.fname ? row.fname : "-"}</TableCell>
                <TableCell>{row.email ? row.email : "-"}</TableCell>
                <TableCell>{row.DOB}</TableCell>
                <TableCell>{row.AIQRank}</TableCell>
                <TableCell>{row.phonenumber}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.state}</TableCell>
                <TableCell>{row.question}</TableCell>
                <TableCell>
                  <ArrowDownwardIcon sx={{ fontSize: '1rem', cursor: 'pointer' }} />
                </TableCell>
                <TableCell>
                  <DeleteOutlineIcon sx={{ paddingRight: '10px', cursor: 'pointer' }} />
                  <EditIcon sx={{ paddingRight: '10px', cursor: 'pointer' }} />
                  <ArrowCircleDownOutlinedIcon onClick={() => handleDownload(row)} sx={{ cursor: 'pointer' }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default Counselling;
