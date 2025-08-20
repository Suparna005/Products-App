import React from 'react'
import Login from './components/Login'
import Add from './components/Add'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route element={<PrivateRoute/>}>
        <Route path='/add' element={<Add />}></Route>
        </Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>


    </>
  )
}

export default App
