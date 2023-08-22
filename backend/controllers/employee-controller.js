const mongoose = require('mongoose')

const Employee = require('../models/employee')

// Create a new employee
const newEmployee = async (req, res) => {
    const employee = new Employee({
        name: req.body.name,
        surname: req.body.surname,
        department_id: new mongoose.Types.ObjectId(req.body.department_id)
    })

    try {
        await employee.save()
        res.status(201).json(employee)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Get all employees
const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find()
        res.json(employees)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Get one employee
const findEmployee = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id)
        res.json(employee)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

// Get all employees from one department
// const findEmployeesByDepartment = async (req, res) => {
//     if (!req.query.departmentId) {
//         res.status(400).json({ message: 'Missing departmentId' })
//     } else {
//         try {
//             const employees = await Employee.find({ department_id: req.query.departmentId })
//             res.json(employees)
//         } catch (error) {
//             res.status(404).json({ message: error.message })
//         }
//     }
// }

// Update one employee
const updateEmployee = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id)
        if (req.body.name) {
            employee.name = req.body.name
        }
        if (req.body.surname) {
            employee.surname = req.body.surname
        }
        if (req.body.department_id) {
            employee.department_id = req.body.department_id
        }
        await employee.save()
        res.json(employee)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Delete one employee
const deleteEmployee = async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id)
        res.json({ message: 'Employee has been deleted' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    newEmployee,
    getAllEmployees,
    findEmployee,
    updateEmployee,
    deleteEmployee
}