import React from 'react'
import { Typography, Box,Container } from '@mui/material';

export default function StoreTimings() {
  return (
    <Box py={3} bgcolor="green" color="white">
        <Container maxWidth="md">
            <Typography variant="h6" align="center" gutterBottom>
                Store Timings
            </Typography>
            <Typography varient="body1" align="center">
                Monday : 9:00 AM - 9:00 PM<br />
                Tuesday : 9:00 AM - 9:00 PM<br />
                Wednesday : 9:00 AM - 9:00 PM<br />
                Thursday : 9:00 AM - 9:00 PM<br />
            </Typography>
            <Typography varient="body1" align="center">
                Friday : 10:00 AM - 8:00 PM<br />
                Saturday : 10:00 AM - 8:00 PM<br />
                Sunday : 10:00 AM - 8:00 PM<br />
            </Typography>
        </Container>
    </Box>
  )
}
