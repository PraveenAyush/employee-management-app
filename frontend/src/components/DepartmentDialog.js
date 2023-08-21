import React, { useState} from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, TextField, Button } from '@mui/material'

const DepartmentDialog = ({open, closeDialog, createDepartment, selectedDepartmentId, editDepartment}) => {
	const [newDepartmentName, setNewDepartmentName] = useState('')

	const handleSave = () => {
		if (selectedDepartmentId) {
			editDepartment(selectedDepartmentId, newDepartmentName)
			setNewDepartmentName('')
		} else {
			createDepartment(newDepartmentName)
			setNewDepartmentName('')
		}
	}

  return (
		<Dialog open={open} onClose={closeDialog}>
			<DialogTitle>{selectedDepartmentId ? 'Edit Department' : 'Add New Department'}</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Enter the name of the department:
				</DialogContentText>
				<TextField
					autoFocus
					margin="dense"
					label="Department Name"
					value={newDepartmentName}
					onChange={(e) => setNewDepartmentName(e.target.value)}
					fullWidth
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={closeDialog}>Cancel</Button>
				<Button onClick={handleSave} color="primary">
					{selectedDepartmentId ? 'Save' : 'Create'}
				</Button>
			</DialogActions>
		</Dialog>
  )
}

export default DepartmentDialog