import React, { useState } from 'react'
import { Stack, Box, Typography, FormLabel, TextField, Button } from '@mui/material'

const AddCategory = () => {
  const {category,setCategory}=useState();
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" height="75vh">
      <Box p={3} width={350} border="1px solid" borderRadius={4} >
        <Typography variant='h3'>add category</Typography>
        <Stack component="form">
          <Box mb={3}>
          <FormLabel htmlFor='category'><Typography>Category:</Typography></FormLabel>
          <TextField fullWidth type='text' name='category' placeholder='Enter Category' onChange={(e)=>setCategory(e.target.value)}/>
          </Box>
          <Button variant='contained' mb={2}>add category</Button>
        </Stack>
      </Box>
    </Stack>
  )
}

export default AddCategory