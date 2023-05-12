import React, { useState } from 'react'
import HomePage from '../HomePage'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { Home } from '@mui/icons-material'
import GroceryCard from '../GroceryCard'
import Login from '../Login'
import PersonIcon from '@mui/icons-material/Person';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';

export default function BottomNav() {
    const [value, setValue] = useState()
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
  return (
    <div>
      <br />
      {value === 0 && <HomePage/>}
      {value === 1 && <GroceryCard/>}
      {value === 2 && <Login/>}

      <BottomNavigation value={value} onChange={handleChange} showLabels>
            <BottomNavigationAction label="Home" icon={<Home/>} />
            <BottomNavigationAction label="Menu" icon={<EmojiFoodBeverageIcon/>} />
            <BottomNavigationAction label="Login" icon={<PersonIcon/>} />
      </BottomNavigation>
    </div>
  )
}
