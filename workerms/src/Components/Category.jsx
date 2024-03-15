import { Box,Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <Grid  container>
      <Grid item xs={12}>
         <Box>
            <Typography variant='h3'>Category List</Typography>
            <Link ></Link>
         </Box>
      </Grid>
    </Grid>
  )
}

export default Category