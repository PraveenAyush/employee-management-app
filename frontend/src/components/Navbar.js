import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, IconButton, CssBaseline, Container } from '@mui/material'
import { Home as HomeIcon, People as PeopleIcon, Business as BusinessIcon } from '@mui/icons-material'

import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <Container maxWidth='xl' disableGutters={true}>
      <CssBaseline />
      <AppBar position="static" sx={{mt: 0}}>
        <Toolbar>
          {/* Company Logo */}
          <IconButton edge="start" color="inherit" component={Link} to="/">
            <img src={Logo} alt="Company Logo" style={{ width: '40px', height: '40px' }} />
          </IconButton>

          {/* Company Name */}
          <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
            Apollo Dental
          </Typography>

          {/* Navigation Links */}
          <IconButton color="inherit" component={Link} to="/">
            <HomeIcon />
          </IconButton>
          <IconButton color="inherit" component={Link} to="/employees">
            <PeopleIcon />
          </IconButton>
          <IconButton color="inherit" component={Link} to="/departments">
            <BusinessIcon />
          </IconButton>
        </Toolbar>
      </AppBar >
    </ Container>
  )
}

export default Navbar