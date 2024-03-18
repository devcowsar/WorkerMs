import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Worker = () => {
  return (
    <Box px={5} mt={3}>
          <Stack direction="row" justifyContent="center">
            <Typography variant='h4'>Workers List</Typography>

          </Stack>
          <Link to="/dashboard/add_worker" style={{ textDecoration: "none", borderRadius: 5, padding: 5, backgroundColor: "green", color: 'white' }}>Add Worker</Link>
        </Box>
  )
}

export default Worker