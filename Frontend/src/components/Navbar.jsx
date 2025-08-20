import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link,Navigate, useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate()
  let token = localStorage.getItem('token')
  let removeUser = () => {
    localStorage.removeItem('token')
    navigate('/')
  }
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
              BEAUTY STORE🩰
            </Typography>
            <Link to='/'><Button color="inherit" style={{ color: "white" }}>HOME</Button></Link>
            {!token &&(
              <>
            <Link to='/login'><Button color="inherit" style={{ color: "white" }}>LOGIN</Button></Link>
            </>
            )}
            {token &&(
              <>
            <Link to='/add' ><Button color="inherit" style={{ color: "white" }}>ADD PRODUCTS</Button></Link>
            </>
            )}
            {token && (
              <>
            <Button color="inherit" onClick={removeUser} style={{ color: "white" }}>LOGOUT</Button>
            </>
            )}

          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Navbar
