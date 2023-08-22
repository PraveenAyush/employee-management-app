import React, {useState} from "react"
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from '@mui/material'
import { TextField, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const initialEmployeeData = {
    name: '',
    surname: '',
    department_id: ''
}

const EmployeeDialog = ({open, closeDialog, createEmployee, selectedEmployee, editEmployee, departments}) => {
    const [newEmployeeData, setNewEmployeeData] = useState(initialEmployeeData)

    const handleSave = () => {
        if (selectedEmployee) {
            editEmployee(selectedEmployee._id, newEmployeeData)
            setNewEmployeeData(initialEmployeeData)
        } else {
            createEmployee(newEmployeeData)
            setNewEmployeeData(initialEmployeeData)
        }
    }

    return (
        <Dialog open={open} onClose={closeDialog}>
            <DialogTitle>{selectedEmployee ? 'Edit Employee' : 'Add New Employee'}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Enter the details of the employee:
                </DialogContentText>
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    label="Name"
                    placeholder={selectedEmployee ? selectedEmployee.name : ''}
                    value={newEmployeeData.name}
                    onChange={(e) => setNewEmployeeData({...newEmployeeData, name: e.target.value})}
                    fullWidth
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    label="Surname"
                    placeholder={selectedEmployee ? selectedEmployee.surname : ''}
                    value={newEmployeeData.surname}
                    onChange={(e) => setNewEmployeeData({...newEmployeeData, surname: e.target.value})}
                    fullWidth
                />
                <FormControl fullWidth sx={{my: 1}}>
                    <InputLabel id="department-label">Department</InputLabel>
                    <Select
                        required
                        labelId="department-label"
                        id="department"
                        label="Department"
                        value={newEmployeeData.department_id}
                        onChange={(e) => setNewEmployeeData({...newEmployeeData, department_id: e.target.value})}
                    >
                        {departments.map((department) => (
                            <MenuItem key={department.id} value={department.id}>
                                {department.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeDialog}>Cancel</Button>
                <Button onClick={handleSave} color="primary">
                    {selectedEmployee ? 'Save' : 'Create'}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default EmployeeDialog