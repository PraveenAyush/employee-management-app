import React from 'react'
import { Box, Container, Typography, Button, Stack } from '@mui/material'

const Home = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6
      }}
    >
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Apollo Dental Employee Management System
        </Typography>

        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          {/* Write something about the management system */}
          The Apollo Dental Clinic Employee Management System is a tool that enables you to monitor and manage employees
          and departments in your dental clinic. 
        </Typography>

        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button variant="contained" href='/employees'>Manage Employees</Button>
          <Button variant="outlined" href='/departments'>Manage Departments</Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default Home