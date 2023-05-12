import React from 'react';
import {AppBar, Toolbar, Typography, Button} from '@mui/material';
import { Link } from 'react-router-dom';
import HomePage from '../HomePage';

export default function NavBar() {
  return (
    <div>
    <AppBar position="static">
        <Toolbar>
            <Typography varient="h6" component="div" sx={{flexGrow: 1}}>
              <Link to='/' style={{textDecoration: 'none', color: "white"}}>
            ABC Restaurant</Link>
            </Typography>
            <Button color="inherit"><Link to='/register' style={{textDecoration: 'none', color: "white"}}>Register</Link></Button>
        </Toolbar>
    </AppBar>
    </div>
  )
}
