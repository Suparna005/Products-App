import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: "purple" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >

            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              PRODUCTS CORNER
            </Typography>
            <Link to='/'><Button color="inherit" style={{ color: "white" }}>HOME</Button></Link>
            <Link to='/login'><Button color="inherit" style={{ color: "white" }}>LOGIN</Button></Link>
            <Link to='/add' ><Button color="inherit" style={{ color: "white" }}>ADD PRODUCTS</Button></Link>

          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Navbar
