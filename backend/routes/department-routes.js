const express = require('express')
const router = express.Router()

const departmentController = require('../controllers/department-controller')

router.get('/', departmentController.getDepartments)

router.get('/:name', departmentController.getDepartmentId)

router.post('/new', departmentController.createDepartment)

router.route('/:id')
    .delete(departmentController.deleteDepartment)
    .put(departmentController.updateDepartmentName)

module.exports = router