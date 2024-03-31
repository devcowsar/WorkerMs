import React, { useEffect, useState } from 'react'
import { Box, Button, Divider, Grid, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios';

const Home = () => {
  const [adminTotal, setAdminTotal] = useState(0)
  const [workerTotal, setWorkerTotal] = useState(0)
  const [salaryTotal, setSalaryTotal] = useState(0)
  const [admins, setAdmins] = useState([])
  useEffect(() => {
  adminCount();
  workerCount();
  salaryCount ();
  adminRecords ();
  }, [])

  const adminCount = () => {
    axios.get('http://localhost:3000/auth/admin_count').then(result=>{
      if(result.data.Status){
        setAdminTotal(result.data.Result[0].admin)
      }
    })
  }

  const workerCount= () => {
    axios.get('http://localhost:3000/auth/worker_count').then(result=>{
      if(result.data.Status){
        setWorkerTotal(result.data.Result[0].worker)
      }
    })
  }

  const salaryCount= () => {
    axios.get('http://localhost:3000/auth/salary_count').then(result=>{
      if(result.data.Status){
        setSalaryTotal(result.data.Result[0].salary)
      }
    })
  }

  const adminRecords=()=>{
    axios.get('http://localhost:3000/auth/admin_records').then(result=>{
      if(result.data.Status){
        setAdmins(result.data.Result)
      }else{
        alert(result.data.Error)
      }
    })
  }

  return (
    <Grid container mt={3} columnGap={3} rowGap={3} p={{ xs: 1, md: 0 }}>
      <Grid item xs={12} md={3.7} px={3} pt={2} pb={3} border={1} boxShadow={{ sm: 1 }}>
        <Box pb={1} display='flex' justifyContent='center'>
          <Typography variant='h4'>Admin</Typography>
        </Box>
        <Divider />
        <Stack direction='row' justifyContent='space-between'>
          <Typography variant='h5'>Total:</Typography>
          <Typography variant='h5'>{adminTotal}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} md={3.7} px={3} pt={2} pb={3} border={1} boxShadow={{ sm: 1 }}>
        <Box pb={1} display='flex' justifyContent='center'>
          <Typography variant='h4'>Worker</Typography>
        </Box>
        <Divider />
        <Stack direction='row' justifyContent='space-between'>
          <Typography variant='h5'>Total:</Typography>
          <Typography variant='h5'>{workerTotal}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} md={3.7} px={3} pt={2} pb={3} border={1} boxShadow={{ sm: 1 }}>
        <Box pb={1} display='flex' justifyContent='center'>
          <Typography variant='h4'>Salary</Typography>
        </Box>
        <Divider />
        <Stack direction='row' justifyContent='space-between'>
          <Typography variant='h5'>Total:</Typography>
          <Typography variant='h5'>{salaryTotal}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} mt={4} px={5} pt={3}>
        <Typography variant='h3'>List of Admins</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell >Action</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {admins.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.email}
                  </TableCell>
                  <TableCell ><Button variant='contained' color='info' size='small'>Edit</Button><Button variant='contained' color='warning' size='small'>Delete</Button></TableCell>


                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}

export default Home;