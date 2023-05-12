import React, { useState } from 'react'
import { Typography, TextField, Button, Box, Container, Alert } from '@mui/material';
import GroceryCard from '../GroceryCard';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import BottomNav from '../BottomNav';

let data = {
    name:"rsd@gmail.com",
    password: "1234",
}

export default function Login() {
    const [reservationData, setReservationData] = useState({
        name: '',
        password: '',
    });
    const handleChange = (event) => {
        const {name, value} = event.target;
        setReservationData((prevData) => ({...prevData, [name]: value,}));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        //Handle submit
        console.log("Data R : ",reservationData.name, reservationData.password)
        console.log("Data D : ",data.name, data.password)
        if(reservationData.name == data.name && reservationData.password === data.password ) {
            // <Link exact path="/" element={<GroceryCard/>}/>
            console.log("Success")
        }
    }
  return (
    <Box py={3} bgcolor="grey.200">
        <Container maxWidth="md">
            <Typography variant="h6" align="center" gutterButtom>
                Login
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField id="name" name="name" label="UserName" varient="outlined" marigin="normal"
                fullWidth
                required 
                value={reservationData.name} onChange={handleChange}/>
                <TextField id="password" name="password" 
                type="password" label="Enter Your Password" varient="outlined" marigin="normal"
                fullWidth
                required 
                value={reservationData.password} onChange={handleChange}/>
                 
                <Button type="submit" variant="contained" color="primary" fullWidth>Login</Button>
            </form>
        </Container>
    </Box>
  )
}
