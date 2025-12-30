import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: (theme.vars || theme).palette.background.paper,
  padding: theme.spacing(1),  
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData( 1, 'Tharindu', "Japan", 24,  ),
  createData(2, 'Kavindu', "USA", 37,  ),
  createData(3, 'Ravindu', "India", 24,  ),
  createData(4, 'Nimal', "Australia", 67,  ),
  createData(5, 'Kamal', "Canada", 49,  ),
];

function StudentTable() {
  return (
    <div className='container' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
     <Div sx={{Display:"flex",alignItems:"center",justifyContent:"center",color:"Red",fontSize:"50px",fontWeight:'bold',marginTop:"-250px"}}>Student Table</Div>
      
      <TableContainer component={Paper} sx={{marginTop:"90px"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> SL.ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Place&nbsp;</TableCell>
            <TableCell align="right">Phone&nbsp;</TableCell>
            <TableCell align="right">Actions&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">
                <Button variant="contained" color="primary" size="small" sx={{marginRight: '5px'}}>View</Button>
                <Button variant="contained" color="warning" size="small" sx={{marginRight: '5px'}}>Edit</Button>
                <Button variant="contained" color="error" size="small">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default StudentTable
