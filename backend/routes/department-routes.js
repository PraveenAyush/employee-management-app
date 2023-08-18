const express = require('express')
const router = express.Router()

const departmentController = require('../controllers/department-controller')

router.get('/', departmentController.getDepartments)

router.route('/:name')
    .get(departmentController.getDepartmentId)
    .put(departmentController.updateDepartmentName)

// router.get('/:name', departmentController.getDepartmentId)

router.post('/new', departmentController.createDepartment)

// router.put('/:name', departmentController.updateDepartmentName)

router.delete('/:id', departmentController.deleteDepartment)

module.exports = router