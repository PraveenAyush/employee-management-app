const express = require('express')
const router = express.Router()

const employeeController = require('../controllers/employee-controller')

router.post('/new', employeeController.newEmployee)

router.get('/', employeeController.getAllEmployees)

router.route('/:id')
    .get(employeeController.findEmployee)
    .put(employeeController.updateEmployee)
    .delete(employeeController.deleteEmployee)

module.exports = router