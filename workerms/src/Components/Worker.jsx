import React, { useEffect, useState } from 'react'
import { Box, Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const Worker = () => {
  const [worker, setWorker] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:3000/auth/worker').then(result => {
      if (result.data.Status) {
        setWorker(result.data.Result);
      } else {
        alert(result.data.Error)
      }
    }).catch(err => console.log(err))
  }, [])

  const handleDelete = (id) => {
    axios.delete('http://localhost:3000/auth/delete_worker/' + id)
      .then(result => {
        if (result.data.Status) {
         window.location.reload()
        } else {
          alert(result.data.Error)
        }
      })
  }

  return (
    <Box px={5} mt={3}>
      <Stack direction="row" justifyContent="center">
        <Typography variant='h4'>Workers List</Typography>

      </Stack>
      <Link to="/dashboard/add_worker" style={{ textDecoration: "none", borderRadius: 5, padding: 5, backgroundColor: "green", color: 'white' }}>Add Worker</Link>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Salary</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align='right'>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {worker.map((row) => (

              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell >
                  {row.name}
                </TableCell>
                <TableCell align="right"><img
                  src={`http://localhost:3000/Images/` + row.image}
                  width="40px" height="40px" style={{ borderRadius: "50%" }} /></TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.salary}</TableCell>
                <TableCell align="right">{row.address}</TableCell>

                <TableCell align="right"><Link to={`/dashboard/edit_worker/` + row.id} style={{ textDecoration: "none", borderRadius: 5, paddingLeft: 15, paddingRight: 15, paddingTop: 7, paddingBottom: 7, backgroundColor: "green", color: 'white' }}>Edit</Link><Button color='warning' size='small' variant='contained' sx={{ ml: 1 }} onClick={() => handleDelete(row.id)}>Delete</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Worker