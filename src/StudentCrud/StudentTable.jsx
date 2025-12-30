import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import backgroundImg from '../assets/background.jpg';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  padding: theme.spacing(2),
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}));

function StudentTable() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddStudent = () => {
    if (name && place && phone) {
      const newStudent = { name, place, phone };
      fetch("http://localhost:8000/students", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newStudent)
      })
      .then((res) => res.json())
      .then((data) => {
        setStudents([...students, data]);
        setName('');
        setPlace('');
        setPhone('');
      })
      .catch((error) => console.error("Error adding student:", error));
    }
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/students/${id}`, {
       method: 'DELETE'
       })
      .then(() => setStudents(students.filter((student) => student.id !== id)))
      .catch((error) => console.error("Error deleting student:", error));
  };

  useEffect(() => {
    fetch("http://localhost:8000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching student data:", error));
  }, []);

  return (
    <div className='container' style={{
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      width: '100%',
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      padding: '20px'
    }}>
     <Div sx={{display:"flex",alignItems:"center",justifyContent:"center",color:"#180101ff",fontSize:"50px",fontWeight:'bold',marginBottom:"30px",boxShadow: '0 4px 6px rgba(0, 0, 0, 0.9)',backgroundColor: 'rgba(253, 253, 253, 0.1)'}}>Student Table</Div>
      
      <TableContainer component={Paper} sx={{marginTop:"20px", boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Place&nbsp;</TableCell>
            <TableCell align="right">Phone&nbsp;</TableCell>
            <TableCell align="right">Actions&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow
              key={student.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {student.id}
              </TableCell>
              <TableCell align="right">{student.name}</TableCell>
              <TableCell align="right">{student.place}</TableCell>
              <TableCell align="right">{student.phone}</TableCell>
              <TableCell align="right">
                <Button variant="contained" color="primary" size="small" sx={{marginRight: '5px'}} onClick={() => navigate(`/StudentCrud/view/${student.id}`, { state: { student } })}>View</Button>
                <Button variant="contained" color="warning" size="small" sx={{marginRight: '5px'}} onClick={() => navigate(`/StudentCrud/edit/${student.id}`, { state: { student } })}>Edit</Button>
                <Button variant="contained" color="error" size="small" onClick={() => handleDelete(student.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <Box component={Paper} sx={{marginTop: '30px', padding: '20px', width: '650px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
      <h3 style={{marginTop: 0}}>Add Student</h3>
      <Box sx={{display: 'flex', gap: '10px', marginBottom: '15px'}}>
        <TextField
          label="Name"
          variant="outlined"
          size="small"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
        <TextField
          label="Place"
          variant="outlined"
          size="small"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          fullWidth
        />
        <TextField
          label="Phone"
          variant="outlined"
          size="small"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          fullWidth
        />
      </Box>
      <Button variant="contained" color="success" onClick={handleAddStudent}>
        Add Student
      </Button>
    </Box>
    </div>
  )
}

export default StudentTable
