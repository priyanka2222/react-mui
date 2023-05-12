import React, { useState } from 'react'
import { Typography, TextField, Button, Box, Container } from '@mui/material';

export default function RegistrationForm() {
    const [registrationData, setRegistrationData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
    });
    const handleChange = (event) => {
        const {name, value} = event.target;
        setRegistrationData((prevData) => ({...prevData, [name]: value,}));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        //Handle submit
    }
  return (
    <Box py={3} bgcolor="grey.200">
        <Container maxWidth="md">
            <Typography variant="h6" align="center" gutterButtom>
                Make a Registration
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField id="name" name="name" label="Your Name" varient="outlined" marigin="normal"
                fullWidth
                required 
                value={registrationData.name} onChange={handleChange}/>
                <TextField id="email" name="email" label="Your Email" varient="outlined" marigin="normal"
                fullWidth
                required 
                value={registrationData.email} onChange={handleChange}/>
                
                 <TextField id="phone" name="phone" label="Phone Number"
                type="number"
                varient="outlined" marigin="normal"
                fullWidth
                required 
                value={registrationData.phone} onChange={handleChange}/>
                 <TextField id="password" name="password" label="Password"
                type="password"
                varient="outlined" marigin="normal"
                fullWidth
                required 
                value={registrationData.password} onChange={handleChange}/>
                <Button type="submit" variant="contained" color="primary" fullWidth>Make Registration</Button>
            </form>
        </Container>
    </Box>
  )
}
