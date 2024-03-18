import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Paper,Box, Grid, Stack, Typography,Table,TableBody,TableCell, TableRow,TableContainer,TableHead} from '@mui/material'
import axios from 'axios';



const Category = () => {
  const [category,setCategory]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/auth/category').then(result=>{
    if(result.data.Status){
      setCategory(result.data.Result);
    }else{
      alert(result.data.Error)
    }
    }).catch(err=>console.log(err))
  },[])
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box px={5} mt={3}>
          <Stack direction="row" justifyContent="center">
            <Typography variant='h4'>Category List</Typography>

          </Stack>
          <Link to="/dashboard/add_category" style={{ textDecoration: "none", borderRadius: 5, padding: 5, backgroundColor: "green", color: 'white' }}>Add Category</Link>
        </Box>
        <TableContainer component={Paper} sx={{mt:3}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {category.map((row) => (
            <TableRow
              key={row.Id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >
                {row.Name}
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Grid>
    </Grid>
  )
}

export default Category