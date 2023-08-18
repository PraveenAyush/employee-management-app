const express = require('express')
const router = express.Router()

const employeeController = require('../controllers/employee-controller')


router.post('/new', employeeController.newEmployee)

router.get('/', employeeController.getAllEmployees)

// router.get('/:id', employeeController.findEmployee)

router.get('/department/:department_id', employeeController.findEmployeesByDepartment)

router.route('/:id')
    .get(employeeController.findEmployee)
    .put(employeeController.updateEmployee)
    .delete(employeeController.deleteEmployee)

// router.put('/:id', employeeController.updateEmployee)

// router.delete('/:id', employeeController.deleteEmployee)

module.exports = router