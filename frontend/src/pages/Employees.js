import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material'
import {Box, Typography} from '@mui/material'

import EmployeeDialog from '../components/EmployeeDialog'

const Employees = () => {
  const [departments, setDepartments] = useState([])
  const [openDialog, setOpenDialog] = useState(false)
  const [employees, setEmployees] = useState([])
  const [selectedEmployee, setSelectedEmployee] = useState(null)

  useEffect(() => {
    fetchDepartments()
    fetchAllEmployees()
  }, [])

  const fetchDepartments = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/departments`) 
      setDepartments(response.data)
    } catch (error) {
      console.error('Error fetching departments:', error)
    }
  };

  const fetchAllEmployees = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/employees`)
      setEmployees(response.data)
    } catch (error) {
      console.error('Error fetching employees:', error)
    }
  };

  const createEmployee = async (employee) => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/employees/new`, employee)
      fetchAllEmployees()
      setOpenDialog(false)
    } catch (error) {
      console.error('Error creating employee:', error)
    }
  };

  const deleteEmployee = async (employeeId) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/employees/${employeeId}`)
      fetchAllEmployees()
    } catch (error) {
      console.error('Error deleting employee:', error)
    }
  };

  const editEmployee = async (id, employee) => {
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/employees/${id}`, employee)
      fetchAllEmployees()
      setOpenDialog(false)
    } catch (error) {
      console.error('Error editing employee:', error)
    }
  };

  return (
    <Box m={'15px'}>
      <Typography variant='h4' py={'10px'}>Employees</Typography>
      <Button color="primary" variant='contained' onClick={() => setOpenDialog(true)}>
        Add Employee
      </Button>
      {departments.map((department) => (
        <Box my={'10px'} key={department.id}>
          <Typography variant='h5' fontWeight={'bold'} pt={'5px'}>{department.name}</Typography>
          <EmployeeDialog
            open={openDialog}
            closeDialog={() => {
              setOpenDialog(false);
              setSelectedEmployee(null);
            }}
            createEmployee={createEmployee}
            selectedEmployee={selectedEmployee}
            editEmployee={editEmployee}
            departments={departments}
          />
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Employee ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Surname</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employees.filter(employee => employee.department_id === department.id).map((employee) => (
                  <TableRow key={employee._id}>
                    <TableCell>{employee._id}</TableCell>
                    <TableCell>{employee.name}</TableCell>
                    <TableCell>{employee.surname}</TableCell>
                    <TableCell>
                      <Button
                        color="primary"
                        onClick={() => deleteEmployee(employee._id)}
                      >
                        Delete
                      </Button>
                      <Button
                        color="primary"
                        onClick={() => {
                          setSelectedEmployee(employee)
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
      ))}
    </Box>
  );
}

export default Employees