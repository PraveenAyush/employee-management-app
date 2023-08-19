import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Employees from './pages/Employees'
import Departments from './pages/Departments'

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/departments" element={<Departments />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
