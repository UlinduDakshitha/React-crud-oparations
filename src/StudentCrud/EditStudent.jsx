import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { TextField, Button, Box, Paper, styled } from '@mui/material'
import backgroundImg from '../assets/background.jpg'

const Div = styled('div')(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  padding: theme.spacing(3),
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}));

function EditStudent() {
  const { StudentId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const student = location.state?.student;
  const [name, setName] = useState(student?.name || '');
  const [place, setPlace] = useState(student?.place || '');
  const [phone, setPhone] = useState(student?.phone || '');
  const [loading, setLoading] = useState(false);

  const handleUpdate = () => {
    if (name && place && phone) {
      setLoading(true);
      const updatedStudent = { name, place, phone };
      fetch(`http://localhost:8000/students/${StudentId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedStudent)
      })
      .then((res) => res.json())
      .then((data) => {
        console.log("Student updated:", data);
        navigate('/StudentCrud');
      })
      .catch((error) => console.error("Error updating student:", error))
      .finally(() => setLoading(false));
    }
  };

  return (
    <div style={{
      display: 'flex',
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
      <Div component={Paper}>
        <h2>Edit Student</h2>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '15px', minWidth: '400px'}}>
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          <TextField
            label="Place"
            variant="outlined"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            fullWidth
          />
          <TextField
            label="Phone"
            variant="outlined"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
          />
          <Box sx={{display: 'flex', gap: '10px'}}>
            <Button variant="contained" color="success" onClick={handleUpdate} disabled={loading}>
              {loading ? 'Updating...' : 'Update'}
            </Button>
            <Button variant="contained" color="error" onClick={() => navigate('/StudentCrud')}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Div>
    </div>
  )
}

export default EditStudent
