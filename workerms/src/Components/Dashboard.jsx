import React from 'react'
import {  Box, Grid, Link, Paper, Stack, Typography } from '@mui/material'
import SpeedIcon from '@mui/icons-material/Speed'
import PeopleIcon from '@mui/icons-material/People';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PersonIcon from '@mui/icons-material/Person';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  
  return (
    <Grid container>
  <Grid item xs={12} md={3}
  >
    <Paper square elevation={1} sx={{backgroundColor:"slategrey",minHeight:"100vh"}}>
   <Stack direction="column" spacing={4} justifyContent="space-between" alignSelf="strech">
    <Box pt={5} pl={2}  component={Link} href="/dashboard" underline="none"><Typography variant='h6'color="whitesmoke" fontWeight={700}>workers management</Typography></Box>
    <Stack pl={4} direction="column" spacing={2}>
     <Box display="flex" flexDirection="row" alignItems="center" gap={1.5} component={Link} href="/dashboard" underline="none"><Box><SpeedIcon/></Box> <Typography >Dashboard</Typography></Box>
     <Box display="flex" flexDirection="row"  alignItems="center" gap={1.5} component={Link} href="/dashboard" underline="none"><Box><PeopleIcon/></Box> <Typography >Manage Employees</Typography></Box>
     <Box display="flex" flexDirection="row" gap={1.5}  alignItems="center" component={Link} href="/dashboard" underline="none"><Box><LibraryBooksIcon /></Box> <Typography >Category</Typography></Box>
     <Box display="flex" flexDirection="row" alignItems="center" gap={1.5} component={Link} href="/dashboard" underline="none"> <Box><PersonIcon/></Box> <Typography >Profile</Typography></Box>
     <Box  display="flex" flexDirection="row" gap={1.5} alignItems="center"  component={Link} href="/dashboard" underline="none"> <Box><PowerSettingsNewIcon/></Box> <Typography >Logout</Typography></Box>
     
    </Stack>
   </Stack>
   </Paper>
  </Grid>
  
  <Grid item xs={12} md={9}>
    <Paper square>
  <Stack alignItems="center" justifyContent="center" p={1.5}><Typography variant='h4'>Employee Mangement System</Typography></Stack>
  </Paper>
  <Outlet/>
  </Grid>
</Grid>
  )
}

export default Dashboard