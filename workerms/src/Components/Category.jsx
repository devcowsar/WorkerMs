import { Box,Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <Grid  container>
      <Grid item xs={12}>
        <Box px={5} mt={3}>
         <Stack direction="row" justifyContent="center">
            <Typography variant='h4'>Category List</Typography>
           
         </Stack>
         <Link to="/dashboard/add_category" style={{textDecoration:"none",borderRadius:5,padding:5,backgroundColor:"green",color:'white'}}>Add Category</Link>
         </Box>
      </Grid>
    </Grid>
  )
}

export default Category