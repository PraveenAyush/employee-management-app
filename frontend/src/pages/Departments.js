import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Button, Paper, Box, Typography } from '@mui/material'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

import DepartmentDialog from '../components/DepartmentDialog'

const Departments = () => {
  const [departments, setDepartments] = useState([])
  const [openDialog, setOpenDialog] = useState(false)
  const [selectedDepartmentId, setSelectedDepartmentId] = useState(null)

  useEffect(() => {
    fetchDepartments()
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/departments/`)
      setDepartments(response.data)
    } catch (error) {
      console.error('Error fetching departments:', error)
    }
  }

  const createDepartment = async (newDepartmentName) => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/departments/new`, { name: newDepartmentName })
      fetchDepartments()
      setOpenDialog(false)
    } catch (error) {
      console.error('Error creating department:', error)
    }
  }

  const deleteDepartment = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/departments/${id}`)
      fetchDepartments()
    } catch (error) {
      console.error('Error deleting department:', error);
    }
  }

  const editDepartment = async (id, newDepartmentName) => {
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/departments/${id}`, { name: newDepartmentName })
      fetchDepartments()
      setOpenDialog(false)
    } catch (error) {
      console.error('Error editing department:', error)
    }
  }
  
  return (
    <Box m={'15px'}>
      <Typography variant='h4' py={'10px'}>Departments</Typography>
      <Button color="primary" variant='contained' sx={{mb: '10px'}} onClick={() => setOpenDialog(true)}>
        Add Department
      </Button>
      <DepartmentDialog 
        open={openDialog} 
        closeDialog={() => {
          setOpenDialog(false)
          setSelectedDepartmentId(null)
        }} 
        createDepartment={createDepartment}
        selectedDepartmentId={selectedDepartmentId}
        editDepartment={editDepartment}
      />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Department Name</TableCell>
              <TableCell>Department ID</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {departments.map((department) => (
              <TableRow key={department.id}>
                <TableCell>{department.name}</TableCell>
                <TableCell>{department.id}</TableCell>
                <TableCell>
                  <Button color="primary" onClick={() => deleteDepartment(department.id)}>
                    Delete
                  </Button>
                  <Button 
                    color='primary' 
                    onClick={() => {
                      setSelectedDepartmentId(department.id)
                      setOpenDialog(true)
                    }}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Departments