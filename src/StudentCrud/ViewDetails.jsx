import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Box, Paper, Card, CardContent, Typography, styled } from '@mui/material'
import backgroundImg from '../assets/background.jpg'

const StyledCard = styled(Card)(() => ({
  maxWidth: 500,
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
}));

function ViewDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const student = location.state?.student;

  if (!student) {
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
        <Box>
          <Typography variant="h6" color="error">No student data found</Typography>
          <Button variant="contained" onClick={() => navigate('/StudentCrud')} sx={{marginTop: '20px'}}>
            Back to Table
          </Button>
        </Box>
      </div>
    );
  }

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
      <StyledCard>
        <CardContent>
          <Typography variant="h4" component="div" sx={{marginBottom: '20px', textAlign: 'center'}}>
            Student Details
          </Typography>
          <Box sx={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
            <Box>
              <Typography variant="subtitle2" color="textSecondary">ID</Typography>
              <Typography variant="body1">{student.id}</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" color="textSecondary">Name</Typography>
              <Typography variant="body1">{student.name}</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" color="textSecondary">Place</Typography>
              <Typography variant="body1">{student.place}</Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" color="textSecondary">Phone</Typography>
              <Typography variant="body1">{student.phone}</Typography>
            </Box>
          </Box>
          <Button 
            variant="contained" 
            color="primary" 
            fullWidth 
            onClick={() => navigate('/StudentCrud')}
            sx={{marginTop: '20px'}}
          >
            Back to Table
          </Button>
        </CardContent>
      </StyledCard>
    </div>
  )
}

export default ViewDetails
