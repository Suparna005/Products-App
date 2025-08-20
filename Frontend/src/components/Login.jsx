import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Login = () => {

const [form, setForm] = useState({
    email: '',
    password: ''

  })
  const navigate = useNavigate()

  function submitValue(e) {
    e.preventDefault()
  axios.post("http://localhost:5000/api/user", form)
      .then((response) => {
        alert("Logined successfully")
        if (response.data.usertoken) {
          localStorage.setItem("token", response.data.usertoken)
          navigate("/")
        } else {
          console.error("Error:", error.response.data);
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Something went wrong:Please check email & password");
      })
  }
  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h2 style={{ color: "palevioletred" }}>LOGIN</h2>
      <Box
        component="form"
        onSubmit={submitValue}
        sx={{ '& > :not(style)': { m: 1, width: '35ch' } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          variant="standard"
          required
        /><br></br>

        <TextField
          id="standard-basic"
          label="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          variant="standard"
          required
        /><br></br>

        <Button variant="contained" type='submit' style={{ backgroundColor: "palevioletred", marginTop: "10px" }}>Login</Button>
      </Box>
    </div>
  )
}

export default Login
