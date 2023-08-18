const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    department_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department', // Reference to the 'Department' collection
        required: true
    }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
