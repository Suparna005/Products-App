import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useEffect } from 'react'
import axiosInstance from '../axiosinterceptor'


const Add = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    status: '',
    imageUrl: ''
  })
  const navigate = useNavigate()

  function submitValue(e) {
    if (location.state != null) {
      axiosInstance.put('http://localhost:5000/products/update/' + location.state.pro._id,form)
        .then((res) => {
          console.log('Form Submitted..', response.data)
          alert("product updated successfully")
          navigate('/')
        })
            .catch((error) => {
              console.error(error)
            })
        
    } else {
    // e.preventDefault()

    axiosInstance.post('http://localhost:5000/products/add', form)
      .then((response) => {
        console.log('Form Submitted..', response.data)
        alert("Product added successfully")
        navigate('/')
      })
      .catch((err) => {
        console.error(err)
        // navigate('/')
      })
    }
  }
  //to track the current location,use uselocation
  let location = useLocation()
  useEffect(() => {
    if (location.state != null) {
      setForm({
        ...form,
        title: location.state.pro.title,
        description: location.state.pro.description,
        status:location.state.pro.status,
        imageUrl: location.state.pro.imageUrl

      })
    }
  }, [])


  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2 style={{ color: "palevioletred" }}>ADD PRODUCT</h2>
      <Box
        component="form"
        onSubmit={submitValue}
        sx={{ '& > :not(style)': { m: 1, width: '70ch' } }}
        noValidate
        autoComplete="off"
      >
        <TextField required
          id="title"
          label="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          variant="outlined" /><br />

        <TextField required
          id="description"
          label="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          variant="outlined" /><br />

        <TextField required
          id="status"
          label="Status"
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
          variant="outlined" /><br />

        <TextField required
          id="imageUrl"
          label="ImageUrl"
          value={form.imageUrl}
          onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
          variant="outlined" /><br /><br />
        <Button variant="contained" type='submit' style={{ backgroundColor: "palevioletred", height: "50px" }}>ADD PRODUCT</Button>
      </Box>

    </div>
  )
}

export default Add