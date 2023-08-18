const mongoose = require('mongoose')

const Department = require('../models/department')

// Controllers
const createDepartment = async (req, res) => {
    const department = new Department({
        name: req.body.name
    })

    try {
        await department.save()
        res.status(201).json(department)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

const getDepartments = async (req, res) => {
    try {
        const departments = await Department.find()
        const nameAndId = departments.map(department => {
            return {name: department.name, id: department._id}
        })
        res.json(nameAndId)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const getDepartmentId = async (req, res) => {
    try {
        const department = await Department.findOne({name: req.params.name})
        res.json(department._id)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const updateDepartmentName = async (req, res) => {
    try {
        const department = await Department.findOne({name: req.params.name})
        department.name = req.body.name
        await department.save()
        res.json(department)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const deleteDepartment = async (req, res) => {
    try {
        await Department.findByIdAndDelete(req.params.id)
        res.json({ message: 'Deleted Department' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = {
    createDepartment,
    getDepartments,
    getDepartmentId,
    updateDepartmentName,
    deleteDepartment
}