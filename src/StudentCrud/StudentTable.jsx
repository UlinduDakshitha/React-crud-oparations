import React from 'react'
import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: (theme.vars || theme).palette.background.paper,
  padding: theme.spacing(1),  
}));

function StudentTable() {
  return (
    <div className='container' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
     <Div sx={{Display:"flex",alignItems:"center",justifyContent:"center",color:"Red",fontSize:"50px",fontWeight:'bold'}}>Student Table</Div>
      
    </div>
  )
}

export default StudentTable
