import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Stack, Box, Typography, FormLabel, TextField, Button } from '@mui/material'
import axios from 'axios'

const AddCategory = () => {
  const [category, setCategory] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3000/auth/add_category', {category})
      .then(result => {
          if(result.data.Status) {
              navigate('/dashboard/category')
          } else {
              alert(result.data.Error)
          }
      })
      .catch(err => console.log(err))
  }
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" height="75vh">
      <Box p={3} width={350} border="1px solid" borderRadius={4} >
        <Typography variant='h3'>add category</Typography>
        <Stack component="form" onSubmit={handleSubmit}>
          <Box mb={3}>
          <FormLabel htmlFor='category'><Typography>Category:</Typography></FormLabel>
          <TextField fullWidth type='text' name='category' placeholder='Enter Category' onChange={(e)=>setCategory(e.target.value)}/>
          </Box>
          <Button  onClick={handleSubmit}  variant='contained' mb={2}>add category</Button>
        </Stack>
      </Box>
    </Stack>
  )
}

export default AddCategory