import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        p: 2,
        mt: 'auto',
        bottom: 0,
        width: '100%'
      }}
    >
      <Typography variant="body2">
       Copyright © {new Date().getFullYear()} Apollo. All rights reserved.
      </Typography>
    </Box>
  )
}

export default Footer