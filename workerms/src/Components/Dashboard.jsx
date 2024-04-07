import React from 'react'
import { Box, Grid, Paper, Stack, Typography } from '@mui/material'
import SpeedIcon from '@mui/icons-material/Speed'
import PeopleIcon from '@mui/icons-material/People';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PersonIcon from '@mui/icons-material/Person';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
  const nvaigate = useNavigate();
  axios.defaults.withCredentials = true
  const handleLogout = () => {
    axios.get('http://localhost:3000/auth/logout').then(result => {
      if (result.data.Status) {
        localStorage.removeItem("valid")
        nvaigate('/')
      }
    })
  }

  return (
    <Grid container>
      <Grid item xs={12} md={3.2}
      >
        <Paper square elevation={1} sx={{ backgroundColor: "slategrey", height: "100vh", position: { md: 'fixed' } }}>
          <Stack direction="column" spacing={4} justifyContent="space-between" alignSelf="strech">
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <Box pt={5} pl={1} ><Typography variant='h5' color="whitesmoke" fontWeight={700}>workers management</Typography></Box>
            </Link>
            <Stack pl={4} direction="column" spacing={2}>
              <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                <Box display="flex" flexDirection="row" alignItems="center" gap={1.5}><SpeedIcon fontSize='medium' /> <Typography variant='h6'>Dashboard</Typography></Box>
              </Link>
              <Link to="/dashboard/worker" style={{ textDecoration: 'none' }}>
                <Box display="flex" flexDirection="row" alignItems="center" gap={1.5}><PeopleIcon fontSize='medium' /> <Typography variant='h6'>Manage Employees</Typography></Box>
              </Link>
              <Link to="/dashboard/category" style={{ textDecoration: 'none' }}>
                <Box display="flex" flexDirection="row" gap={1.5} alignItems="center" ><LibraryBooksIcon fontSize='medium' /> <Typography variant='h6'>Category</Typography></Box>
              </Link>
              <Link to="/dashboard/profile" style={{ textDecoration: 'none' }}>
                <Box display="flex" flexDirection="row" alignItems="center" gap={1.5} > <PersonIcon fontSize="medium" /> <Typography variant='h6'>Profile</Typography></Box>
              </Link>
              <Link onClick={handleLogout} to="" style={{ textDecoration: 'none' }}>
                <Box display="flex" flexDirection="row" gap={1.5} alignItems="center"  > <PowerSettingsNewIcon fontSize="medium" /> <Typography variant='h6'>Logout</Typography></Box>
              </Link>

            </Stack>
          </Stack>
        </Paper>
      </Grid>

      <Grid item xs={12} md={8.8}>
        <Paper square>
          <Stack alignItems="center" justifyContent="center" p={1.5}><Typography variant='h4'>Employee Mangement System</Typography></Stack>
        </Paper>
        <Outlet />
      </Grid>
    </Grid>
  )
}

export default Dashboard