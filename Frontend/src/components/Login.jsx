import React from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const Login = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h2 style={{ color: "palevioletred" }}> USER-LOGIN</h2>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '35ch' } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Username"
          variant="standard"
          required
        /><br></br>

        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          required
        /><br></br>

        <Button variant="contained" style={{ backgroundColor: "palevioletred", marginTop: "10px" }}>Login</Button>
      </Box>
    </div>
  )
}

export default Login
